import React, { useEffect, useState } from 'react'
import SmallIndicator from '../SmallIndicator';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import './styles.css'

export default function ActivitiesCard(props) {

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        if ( props.activities !== undefined ) {
            setTotal(props.activities.total)
            console.log(Object.keys(props.activities))
        }
    }, [props])

    function handleSearch(e) {
        e.preventDefault();
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

           {/*  <div className="activities-time-line hideScrollbar">

                <VerticalTimeline layout='1-column' className="vertical-timeline-custom-line" >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#525252' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', border: '0px'}}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                        Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                        Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>

            </div> */}

        </div>
    )
}