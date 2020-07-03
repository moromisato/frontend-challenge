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
    const [ activitiesKeys, setActivitiesKey ] = useState([])
    const [ originalActivitiesKey, setOriginalActivitiesKey ] = useState([])

    useEffect(() => {
        if ( props.activities !== undefined ) {
            setTotal(props.activities.total)
            setActivitiesObject(props.activities)
            setOriginalActivitiesKey(Object.keys(props.activities))
            setActivitiesKey(Object.keys(props.activities))
        }
    }, [props])

/*     function handleSearch(e) {
        e.preventDefault();
    } */

    /* function extractAllActivities(activitiesObject) {
        let allActivities = []

        let keys = Object.keys(activitiesObject)

        keys.map((key) => {
            if ( key !== 'total' ) {
                allActivities.push(...activitiesObject[key]['values'])
            }
        })

        return allActivities
    } */

    function keepActivityKey(key) {
        let filteredKeys = activitiesKeys.slice()
        let originalKeys = originalActivitiesKey.slice()
        let index = activitiesKeys.indexOf(key)

        if ( index !== -1 ) {
            
            if ( key === 'total' ) {
                filteredKeys = originalKeys
            } else {
                filteredKeys = ['total', key]
            }
    
            console.log(filteredKeys)
            setActivitiesKey(filteredKeys)

        } else {
            if ( key !== 'total' ) {
                console.log(key)
                filteredKeys = [...filteredKeys, key]
                setActivitiesKey(filteredKeys)
            }

        }
    }

    function renderSmallIndicators(keys) {

        let smallIndicators = []

        keys.map((key) => {

            let isSelected = activitiesKeys.includes(key) ? true : false

            if ( key === 'total' ) {
                smallIndicators.push(
                    <SmallIndicator 
                        value={ props.activities !== undefined ? props.activities[key] : '' }
                        description={ props.activities !== undefined ? originalActivitiesKey[0].charAt(0).toUpperCase() + originalActivitiesKey[0].slice(1) : '' }
                        isSelected={ isSelected }
                        callBackKey={ key }
                        callBack={keepActivityKey} />
                )    
            } else {
                smallIndicators.push(
                    <SmallIndicator 
                        value={ props.activities !== undefined ? props.activities[key]['total'] : '' } 
                        description={ props.activities !== undefined ? props.activities[key]['description'] : '' }
                        isSelected={ isSelected }
                        callBackKey={ key }
                        callBack={keepActivityKey} />
                )
            }
        })

        return smallIndicators

    }

    function renderInnerValues(description, innerValues) {
        let values = []

        innerValues.map((value, index) => {
            values.push(
                <AcitivityDescription key={index} description={description} value={value} />
            )
        })

        return values
    }

    function renderActivities() {

        let activities = []
        let activitiesTimeLineEntries = []

        //let keys = Object.keys(activitiesObject)

        activitiesKeys.map((key) => {
            if ( key !== 'total' ) {
                let activityEntry = {
                    'activityId': activitiesObject[key]['activity_id'], 
                    'description': activitiesObject[key]['description'],
                    'total': activitiesObject[key]['total'],
                    'values': activitiesObject[key]['values']
                }

                activities.push(activityEntry)
            } else {
                return
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
        //let keys = Object.keys(activitiesObject)

        activitiesKeys.map((key) => {
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
                <form>
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
                
                { renderSmallIndicators(originalActivitiesKey) }

            </div>


            <div className="activities-time-line hide-scrollbar">

                <VerticalTimeline layout='1-column' className="vertical-timeline-custom-line" >
                    {searchTerm !== '' ? renderFilteredActivities() : renderActivities()}
                </VerticalTimeline>

            </div>

        </div>
    )
}