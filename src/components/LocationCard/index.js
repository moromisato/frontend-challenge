import React from 'react'
import './styles.css'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

export default function LocationCard() {

    function mapTilerProvider (x, y, z, dpr) {
        const s = String.fromCharCode(97 + (x + y + z) % 3)
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }

    return (
        <div className="location-container">
            <div className="location-title">
                Local
            </div>
            <div className="location-map">
                <Map
                    provider={mapTilerProvider}
                    zoom={18}
                    center={[-24.9466465,-53.4411419]} >
                    <Marker anchor={[-24.9466465,-53.4411419]} />
                </Map>
            </div>
        </div>
    )

}