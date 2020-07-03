import React, { useEffect, useState } from 'react';
import { numberFormat } from '../../utils/FormatFunctions';

import './styles.css';

export default function BaseIndicator(props) {

    const [total, setTotal] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [description, setDescription] = useState('');
    const [ renderFirst, setRenderFirst ] = useState('description')
    const [bgColor, setBgColor] = useState('#fff');

    useEffect(() => {
        if (props.indicator !== undefined) {
            setTotal(props.indicator.total);
            setTotalValue(props.indicator.totalValue);
            setDescription(props.indicator.description);
            setRenderFirst(props.renderFirst)

            if ( props.indicator.description === 'Ganhas' || props.indicator.description === 'Pagos' ) {
                setBgColor('green');
            } else if ( props.indicator.description === 'Perdidas' ) {
                setBgColor('red');
            } else if ( props.indicator.description === 'Abertas') {
                setBgColor('blue');
            } else if ( props.indicator.description === 'Descartadas') {
                setBgColor('darkgray');
            } else if ( props.indicator.description === 'Vencidos') {
                setBgColor('blue')
            } else if ( props.indicator.description === 'A vencer') {
                setBgColor('orange')
            } else {
                setBgColor('lightgray')
            }
        }
    }, [props]);

    function renderLines() {
        if ( renderFirst === 'description' ) {
            return (
                <div className="column-details">
                    <div className="indicator-title">{description}</div>
                    <div className="indicator-description">{numberFormat(totalValue)}</div>
                </div>
            )
        } else {
            return (
                <div className="column-details">
                    <div className="indicator-title">{numberFormat(totalValue)}</div>
                    <div className="indicator-description">{description}</div>
                </div>
            )
        }
    }

    return (
        <div className="base-container">
            <div className="number" style={{ backgroundColor: bgColor }}>
                <p>{total}</p>
            </div>
            {renderLines()}
            
        </div>
    );
}
