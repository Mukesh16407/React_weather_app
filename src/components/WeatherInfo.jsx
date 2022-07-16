import React, { useEffect, useState } from "react";

import { Input } from "./Input";
import { Details } from "./Details";
import "./WeatherInfo.css";
import { WeeklyForCast } from "./WeeklyForCast";
import { getFormattedWeatherData} from "./Service/service";
import { WeatherGraph } from "./WeatherGraph";
import LocalTimeAnDWeather from "./LocalTimeAnDWeather";
import { HourlyForCast } from "./HourlyForCast";

export const WeatherInfo = () => {
  
 const [query,setQuery] = useState({q:'patna'});
 const [units,setUnits] = useState('metric');
 const [weather,setWeather] =useState(null);
const [dailyGraph, setDailyGraph] = useState([])
const [hourlyGraph,setHourlyGraph] = useState([])
 useEffect(()=>{
  
  const fetchWeather =async()=>{
    await getFormattedWeatherData({...query,units})
    .then((data)=>{
      setWeather(data);
      let arr = [data.daily[0].temp, data.daily[1].temp,data.daily[2].temp,
      data.daily[3].temp,data.daily[4].temp];
      let arr1 = [data.daily[0].temp, data.daily[1].temp,data.daily[2].temp,
      data.daily[3].temp,data.daily[4].temp];
    
      setDailyGraph(arr);
      setHourlyGraph(arr1)
    })
    .catch((err)=>{
      console.log(err);
    })

  }
   fetchWeather()
  
},[query,units])



  //console.log(weather)
  return (
    <div className="main-container">
      <div className="container">
        <Input setQuery={setQuery}/>

       {weather &&(
        <>
         <WeeklyForCast items={weather.daily}/>
         <div className="bodyBox">
        <LocalTimeAnDWeather weatherCondition={weather}/>
        <WeatherGraph items={dailyGraph}/>
        <Details weather={weather} unit={setUnits}/>
        <HourlyForCast items={hourlyGraph}/>
         </div>
          
        </>
         
       )}
        
      </div>
    </div>

  );
};


