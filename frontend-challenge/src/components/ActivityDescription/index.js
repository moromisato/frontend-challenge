import React from 'react'

import { getIcon } from '../../utils/AssetsFunctions'

import './styles.css'

export default function AcitivityDescription(props) {

    let description = props.description
    let value = props.value

    return (
        <div className="acitivity-description-container">
            <div className="description-icon">
                {getIcon(value['cathegory'], description)}
            </div>
            <div className="description-texts">
                <p className="description-text" key={value.id}>{value['description']}</p>
                <p className="description-responsible" key={value.id}>{value['responsible']}</p>
                <p className="description-date" key={value.id}>{value['date']}</p>
            </div>
        </div>
    )
}