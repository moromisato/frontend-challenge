import React, { useEffect, useState } from 'react'
import './styles.css'

import { Line } from 'react-chartjs-2'

export default function SalesCard() {

    const [ data, setData ] = useState({})

    useEffect(() => {

        let labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto']
        let dataPoints = []
        let predictPoints = []

        for ( let i = 0; i < 7; i++ ) {
            dataPoints.push(Math.floor(Math.random() * 1001)); 
        }

        dataPoints.map(( dataPoint ) => {
            let min = dataPoint - ( dataPoint * 0.2 )
            let max = dataPoint + ( dataPoint * 0.2 )
            predictPoints.push((Math.random() * (max - min) + min).toFixed(0))
        })

        let nextDataPointPredict = (dataPoints[dataPoints.length - 1] + dataPoints[dataPoints.length - 1] * 0.15).toFixed(0)

        predictPoints.push(nextDataPointPredict)

        let data = {
            labels: labels,
            datasets: [
                {
                    label: 'Vendas realizadas',
                    borderColor: 'gray',
                    fill: false,
                    borderWidth: 1.5,
                    data: dataPoints
                },
                {
                    label: 'Predição de vendas',
                    borderColor: 'lightblue',
                    fill: false,
                    data: predictPoints
                }
            ]
        }

        setData(data)
        
    }, [])

   
    return (
        <div className="sales-container">
            <div className="sales-title">
                Vendas
            </div>
            <div className="sales-chart">
                <Line data={data} />
            </div>
        </div>
    )

}