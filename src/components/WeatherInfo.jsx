import React, { useEffect, useState } from "react";

import { Input } from "./Input";
import { Details } from "./Details";
import "./WeatherInfo.css";
import { WeeklyForCast } from "./WeeklyForCast";
import { getFormattedWeatherData} from "./Service/service";


export const WeatherInfo = () => {
  
 const [query,setQuery] = useState({q:'berlin'});
 const [units,setUnits] = useState('metric');
 const [weather,setWeather] =useState(null);

 useEffect(()=>{
  const fetchWeather =async()=>{
    await getFormattedWeatherData({...query,units})
    .then((data)=>{
      setWeather(data);
      
    });
  }
  fetchWeather()
},[query,units])



  return (
    <div className="main-container">
      <div className="container">
        <Input setQuery={setQuery}/>

       {weather &&(
        <>
         <WeeklyForCast items={weather.daily}/>
        <Details weather={weather} unit={setUnits}/>
          
        </>
         
       )}
        
      </div>
    </div>

  );
};
