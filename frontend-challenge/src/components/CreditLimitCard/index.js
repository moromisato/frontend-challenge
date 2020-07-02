import React, { useEffect, useState } from 'react'
import { numberFormat } from '../../utils/FormatFunctions'

import './styles.css'

export default function CreditLimitCard(props) {

    const [ granted, setGranted ] = useState(0)
    const [ available, setAvailable ] = useState(0)

    useEffect(() => {

        if ( props.creditLimits !== undefined ) {
            setGranted(props.creditLimits.granted)
            setAvailable(props.creditLimits.available)
        }

    }, [props])

    return (
        <div className="credit-limit-container">
            <div className="credit-limit-title">
                Limite de crédito
            </div>

            <div className="limit">
                <p style={{ color: 'blue' }}>{numberFormat(granted)}</p>
                <p>Concedido</p>
            </div>

            <div className="limit">
                <p style={{ color: 'green' }}>{numberFormat(available)}</p>
                <p>Disponível</p>
            </div>
        </div>
    )
}