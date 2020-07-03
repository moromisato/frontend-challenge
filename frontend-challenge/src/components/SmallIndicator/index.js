import React from 'react'

import { getDescriptionColor } from '../../utils/AssetsFunctions'
import './styles.css'

export default function SmallIndicator(props) {

    let { value, description, isSelected, callBackKey, callBack } = props

    return (
        <div className="small-indicator-container" 
             onClick={() => callBack(callBackKey)}
             style={{backgroundColor: isSelected ? '#e6e6e6e6': '', borderRadius: 5}}>
            <div className="value" style={{backgroundColor: getDescriptionColor(description), color: 'white'}}>
                <p>{value}</p>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )

}