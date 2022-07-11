import React, { useState } from 'react';

import { ImLocation } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import './Input.css'

export const Input = ({setQuery}) => {
    
  const [city,setCity] = useState('');

  const handleSearchClick =()=>{
    if(city !=="") setQuery({q:city})
  }
  return (
    <div className="inputBox">
    <ImLocation className="location" />
    <input type='text' placeholder='Search for city...'
    value={city} onChange={(e)=>{
      setCity(e.currentTarget.value)
    }} />
    <BiSearch className="location" 
    onClick={handleSearchClick}/>
  </div>
  )
}


//const fetchApi = async()=>{
    //     try{
    //      let res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`);
    //      let data1 = await res1.json();
    //      let latitude = data1.coord.lat;
    //      let longitude = data1.coord.lon;
    //       // console.log(latitude,longitude)
    //      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    
    //       let res = await fetch(url);
    //       let data = await res.json();
    //       console.log("data", data);
    //       // showWeatherData(data)
    //     }catch(err){
    //      console.log("er:", err);
    //   }finally{
    //       console.log("Worked finally")
    //   }
    //  }