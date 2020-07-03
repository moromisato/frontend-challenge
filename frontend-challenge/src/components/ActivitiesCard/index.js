import React, { useEffect, useState } from 'react'
import SmallIndicator from '../SmallIndicator';
import AcitivityDescription from '../ActivityDescription';

import { getDescriptionColor } from '../../utils/AssetsFunctions'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SearchIcon from '@material-ui/icons/Search';

import './styles.css'

export default function ActivitiesCard(props) {

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ total, setTotal ] = useState(0)
    const [ activitiesObject, setActivitiesObject ] = useState({})
    const [ originalActivities, setOriginalActivities ] = useState([])
    const [ filteredActivities, setFilteredActivities ] = useState([])

    useEffect(() => {
        if ( props.activities !== undefined ) {
            setTotal(props.activities.total)
            setActivitiesObject(props.activities)
            setOriginalActivities(extractAllActivities(props.activities))
            setFilteredActivities(extractAllActivities(props.activities))
        }
    }, [props])

    function handleSearch(e) {
        e.preventDefault();
    }

    function extractAllActivities(activitiesObject) {
        let allActivities = []

        let keys = Object.keys(activitiesObject)

        keys.map((key) => {
            if ( key !== 'total' ) {
                allActivities.push(...activitiesObject[key]['values'])
            }
        })

        return allActivities
    }

    function renderActivities() {

        let activities = []
        let activitiesTimeLineEntries = []

        function renderInnerValues(description, innerValues) {
            let values = []

            innerValues.map((value) => {
                values.push(
                    <AcitivityDescription key={value.id} description={description} value={value} />
                )
            })

            return values
        }

        let keys = Object.keys(activitiesObject)

        keys.map((key) => {
            if ( key !== 'total' ) {
                let activityEntry = {
                    'activityId': activitiesObject[key]['activity_id'], 
                    'description': activitiesObject[key]['description'],
                    'total': activitiesObject[key]['total'],
                    'values': activitiesObject[key]['values']
                }

                activities.push(activityEntry)
                        
            }
        })

        activities.map((activity) => {

            if ( activity['values'].length > 0 ) {
                activitiesTimeLineEntries.push(
                    <VerticalTimelineElement
                        style={{margin: 0}}
                        key={activity['activityId']}
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: getDescriptionColor(activity['description']) , color: '#fff' }}
                    >
                            <h3 className="vertical-timeline-element-title">{activity['description']}</h3>
                            
                            {renderInnerValues( activity['description'], activity['values'])}
    
                    </VerticalTimelineElement>
                )
            }

        })

        return activitiesTimeLineEntries
    }

    function renderFilteredActivities() {

        function renderInnerValues(description, innerValues) {
            let values = []

            innerValues.map((value) => {
                values.push(
                    <AcitivityDescription key={value.id} description={description} value={value} />
                )
            })

            return values
        }

        function getFilteredInnerValues(innerValues) {
            let values = []

            values = innerValues.filter((value) => {
                if ( value['responsible'].includes(searchTerm) ) {
                    return true
                } else if ( value['description'].includes(searchTerm) ) {
                    return true
                } else if ( value['date'].includes(searchTerm) ) {
                    return true
                } else {
                    return false
                }
                
            })

            return values
        }

        let activities = []
        let filteredActivities = []
        let filteredInnerValues = []
        let activitiesTimeLineEntries = []
        let keys = Object.keys(activitiesObject)

        keys.map((key) => {
            if ( key !== 'total' ) {
                let activityEntry = {
                    'activityId': activitiesObject[key]['activity_id'], 
                    'description': activitiesObject[key]['description'],
                    'total': activitiesObject[key]['total'],
                    'values': activitiesObject[key]['values']
                }

                activities.push(activityEntry)
                        
            }
        })

        filteredActivities = activities.filter((activity) => {

            filteredInnerValues = getFilteredInnerValues(activity['values'])

            if ( filteredInnerValues.length > 0 ) {
                activitiesTimeLineEntries.push(
                    <VerticalTimelineElement
                        style={{margin: 0}}
                        key={activity['activityId']}
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: getDescriptionColor(activity['description']) , color: '#fff' }}
                    >
                            <h3 className="vertical-timeline-element-title">{activity['description']}</h3>
                            
                            {renderInnerValues(activity['description'], filteredInnerValues)}
    
                    </VerticalTimelineElement>
                )
            }
        })

        return activitiesTimeLineEntries
    }

    return (
        <div className="activities-container">

            <div className="activities-title">
                Atividades
            </div>

            <div className="activities-search">
                <form onSubmit={handleSearch}>

                    <div className="search-container">
                        <SearchIcon style={{marginRight: 5}} />
                        <input
                            className="search-input"
                            placeholder="Pesquisar..."
                            value={ searchTerm }
                            onChange={ e => setSearchTerm(e.target.value) }
                        />
                    </div>
                </form>
            </div>

            <div className="activities-indicators">
                <div className="small-indicator-container">
                    <div className="value" style={{backgroundColor: '#6d6d6d', color: 'white'}}>
                        <p>{total}</p>
                    </div>
                    <div className="description">
                        <p>Total</p>
                    </div>
                </div>

                <div className="small-indicator-container">
                    <div className="value" style={{backgroundColor: 'red', color: 'white'}}>
                        <p>{props.activities !== undefined ? props.activities['late']['total'] : ''}</p>
                    </div>
                    <div className="description">
                        <p>{props.activities !== undefined ? props.activities['late']['description'] : ''}</p>
                    </div>
                </div>

                <div className="small-indicator-container">
                    <div className="value" style={{backgroundColor: 'blue', color: 'white'}}>
                        <p>{props.activities !== undefined ? props.activities['in_progress']['total'] : ''}</p>
                    </div>
                    <div className="description">
                        <p>{props.activities !== undefined ? props.activities['in_progress']['description'] : ''}</p>
                    </div>
                </div>

                <div className="small-indicator-container">
                    <div className="value" style={{backgroundColor: 'orange', color: 'white'}}>
                        <p>{props.activities !== undefined ? props.activities['expected']['total'] : ''}</p>
                    </div>
                    <div className="description">
                        <p>{props.activities !== undefined ? props.activities['expected']['description'] : ''}</p>
                    </div>
                </div>

                <div className="small-indicator-container">
                    <div className="value" style={{backgroundColor: 'green', color: 'white'}}>
                        <p>{props.activities !== undefined ? props.activities['finished']['total'] : ''}</p>
                    </div>
                    <div className="description">
                        <p>{props.activities !== undefined ? props.activities['finished']['description'] : ''}</p>
                    </div>
                </div>
            </div>


            <div className="activities-time-line hide-scrollbar">

                <VerticalTimeline layout='1-column' className="vertical-timeline-custom-line" >
                    {searchTerm !== '' ? renderFilteredActivities() : renderActivities()}
                </VerticalTimeline>

            </div>

        </div>
    )
}