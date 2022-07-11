import React, { useEffect, useState } from "react";

import { Input } from "./Input";
import { Details } from "./Details";
import "./WeatherInfo.css";
import { WeeklyForCast } from "./WeeklyForCast";
import { getFormattedWeatherData} from "./Service/service";


export const WeatherInfo = () => {
  
 const [query,setQuery] = useState({q:'berlin'});
 const [weather,setWeather] =useState(null);

 useEffect(()=>{
  const fetchWeather =async()=>{
    await getFormattedWeatherData({...query})
    .then((data)=>{
      setWeather(data)
    });
  }
  fetchWeather()
},[query])



  return (
    <div className="main-container">
      <div className="container">
        <Input setQuery={setQuery}/>

       {weather &&(
        <>
         <WeeklyForCast items={weather.daily}/>
        <Details weather={weather}/>
          
        </>
         
       )}
        
      </div>
    </div>

    /*{<input type="text"placeholder="Enter the City Name" value={state.query} onChange={handleChange} />
       <button onClick={handlesearch}>Search</button>
       {loading && <h1>Loading...</h1>}
       {state?.data?.location &&
       <h2>{state.data?.location?.name}</h2>}
       {state.data?.current &&
       <img src={state.data?.current?.condition?.icon} alt="weather app"/>} }*/
  );
};
