import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import GroupIcon from '@material-ui/icons/Group';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import ErrorIcon from '@material-ui/icons/Error';

export function getDescriptionColor(description) {
    let color = '';

    if ( description === 'Em atraso' ) {
        color = 'red'
    } else if ( description === 'Em andamento') {
        color = 'blue'
    } else if ( description === 'Previstas' ) {
        color = 'orange'
    } else if ( description === 'Concluídas' ) {
        color = 'green'
    } else {
        color = 'gray'
    }

    return color
}

export function getIcon(cathegory, description) {

    if ( cathegory === 'meeting') {
        return <GroupIcon style={{color: getDescriptionColor(description)}}/>
    } else if ( cathegory === 'call' ) {
        return <CallIcon style={{color: getDescriptionColor(description)}}/>
    } else if ( cathegory === 'email' ) {
        return <EmailIcon style={{color: getDescriptionColor(description)}}/>
    } else if ( cathegory === 'schedule' ) {
        return <EventIcon style={{color: getDescriptionColor(description)}}/>
    } else {
        return <ErrorIcon style={{color: getDescriptionColor(description)}}/>
    }

}