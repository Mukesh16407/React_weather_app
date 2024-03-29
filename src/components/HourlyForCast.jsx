import React  from 'react'
//import { iconUrlFromCode } from "./Service/service";
import Chart from 'react-apexcharts'
import './HourlyGraph.css'
export const HourlyForCast = ({ items }) => {
    


  return (
    <div className="hourlyWeather">
       <Chart type='area' width="98%" height="98%"
      series={[
        {
          name:"Temperature",
          data:items
        }
    ]}
      options={{
        
        title:{text:"Hourly Temp Analysis"},
        colors:['#4e4949'],
        stroke: {width:2,curve:'smooth'},
        xaxis:{
          categories:["10:00AM", "12:00AM", "02:00PM", "04:00PM","06:00PM"]
      
        },
        yaxis:{
          title:{text:"temp in C"}
        }
      }} >
       
      </Chart>
    </div>
  )
 
}

// {items.map((item=> 
        
//     <div className="flex-col">
//     <p >{item.title}</p>
//     <p>
//       {`${item.temp.toFixed()}`}
//       <sup>o</sup>C
//     </p>
//     <img
//       src={iconUrlFromCode(item.icon)}
//       alt=""
//       style={{ width: "25px" }}
//     />
//     <p>{item.type}</p>
//   </div>
// )

// )}