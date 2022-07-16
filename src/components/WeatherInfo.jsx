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


 useEffect(()=>{
  
  const fetchWeather =async()=>{
    await getFormattedWeatherData({...query,units})
    .then((data)=>{
      setWeather(data);
      
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
        <WeatherGraph items={weather.daily}/>
        <Details weather={weather} unit={setUnits}/>
        <HourlyForCast items={weather.hourly}/>
         </div>
          
        </>
         
       )}
        
      </div>
    </div>

  );
};


