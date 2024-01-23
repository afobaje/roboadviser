import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale, 
    BarElement,
    LinearScale,
    Title,
   
)


const options = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar chart'
            }
        }
    }
}


const labels=['Nigerian Stock','Foreign Stock','Tech Stock','Emerging Stock','Nigerian Bonds','Foreign Bonds','Commodities','Real Estate']
// const labels = ['Stock', 'Meta', 'Flourish']
export default function Chart({chartData}:{chartData:any}) {
    console.log(chartData,'from here')


    let arrValue=chartData.slice(1,9)
    console.log(arrValue,'redefined')
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                // data: [20,30,40],
                data:arrValue,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
    
            }
        ]
    }
    return (
        <Bar
            options={options}
            data={data}
        />
    )
}
