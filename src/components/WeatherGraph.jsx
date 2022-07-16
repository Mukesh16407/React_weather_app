import React, { useState } from 'react'
import './WeatherGraph.css'
import Chart from 'react-apexcharts'

export const WeatherGraph = ({items}) => {
 
 console.log(items) 
  return (
    <div className='graph'>
      <Chart type='line' width="98%" height="98%"
      series={[
        {
          name:"Temperature",
          data:[20,35,40,38,32]
        }
    ]}
      options={{
        title:{text:"Daily Temp Analysis"},
        xaxis:{
          categories:["sun","mon","tue","wed","thu"]
      
        },
        yaxis:{
          title:{text:"temp in C"}
        }
      }} >
       
      </Chart>
    </div>
  )
}
