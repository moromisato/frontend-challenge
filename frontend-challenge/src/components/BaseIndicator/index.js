import React, { useEffect, useState } from 'react'
import { numberFormat } from '../../utils/FormatFunctions'

import './styles.css'

export default function BaseIndicator(props) {

    let { total, totalValue, description } = props.indicator

    const [ bgColor, setBgColor ] = useState('#fff')

    useEffect(() => {

        if ( description === 'Ganhas' ) {
            setBgColor('green')
        } else if ( description === 'Perdidas' ) {
            setBgColor('red')
        } else if ( description === 'Abertas' ) {
            setBgColor('blue')
        } else if ( description === 'Descartadas' ) {
            setBgColor('darkgray')
        }

    }, [description])

    return (
        <div className="base-container">
            <div className="number" style={{backgroundColor: bgColor}}>
                <p>{ total }</p>
            </div>
            <div className="column-details">
                <div className="indicator-title">
                    { description }
                </div>
                <div className="indicator-description">
                    { numberFormat(totalValue) }
                </div>
            </div>
        </div>
    )

}