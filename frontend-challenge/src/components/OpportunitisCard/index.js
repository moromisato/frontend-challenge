import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import BaseIndicator from '../BaseIndicator'

import './styles.css'

export default function OpportunitiesCard(props) {

    const indicator = {
        'won': {
            'description': 'Ganhas',
            'total': 4,
            'totalValue': 20000,
            'values': [
                { 'id': 1, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 2, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 3, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 4, 'type': 'won', 'value': 5000, 'obs': '' },
            ]
        },
        'lost': {
            'description': 'Perdidas',
            'total': 1,
            'totalValue': 3000,
            'values': [
                { 'id': 5, 'type': 'lost', 'value': 3000, 'obs': '' },
            ]
        },
        'opened': {
            'description': 'Abertas',
            'total': 2,
            'totalValue': 'Diversas Moedas',
            'values': [
                { 'id': 6, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
                { 'id': 7, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
            ]
        },
        'discarted': {
            'description': 'Descartadas',
            'total': 0,
            'totalValue': 0,
            'values': []
        }
    }

    return (
        <div className="card-container">
            <div className="title">
                <p>Oportunidades ({indicator['won']['total']})</p>
                <InfoIcon />
            </div>

            <div className="main-content">
                <BaseIndicator indicator={indicator['won']}/>
                <BaseIndicator indicator={indicator['lost']}/>
                <BaseIndicator indicator={indicator['opened']}/>
                <BaseIndicator indicator={indicator['discarted']}/>
            </div>

        </div>
    )
}
