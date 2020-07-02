import React, { useEffect, useState } from 'react'

import './styles.css'
import BaseIndicator from '../BaseIndicator'

export default function FinancialSecuritiesCard(props) {

    const [ financialSecurities, setFinancialSecurities ] = useState({})

    useEffect(() => {
        if ( props.financialSecurities !== undefined ) {
            setFinancialSecurities(props.financialSecurities)
        }
    }, [props])

    return (
        <div className="financial-titles-container">
            <div className="financial-card-title">
                Títulos financeiros
            </div>
            <div className="titles">
                <BaseIndicator indicator={financialSecurities['expired']} renderFirst='totalValue' />
                <BaseIndicator indicator={financialSecurities['expiring']} renderFirst='totalValue' />
                <BaseIndicator indicator={financialSecurities['paid']} renderFirst='totalValue' />
            </div>
        </div>
    )
}