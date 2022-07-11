import React, { useState } from 'react';

import { ImLocation } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import './Input.css'

export const Input = ({setQuery}) => {
    
  const [city,setCity] = useState('');

  const handleSearchClick =()=>{
    if(city !=="") setQuery({q:city})
  }
  
  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat =position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat,lon})
      })
    }
  }
  return (
    <div className="inputBox">
    <ImLocation className="location"onClick={handleLocationClick} />
    <input type='text' placeholder='Search for city...'
    value={city} onChange={(e)=>{
      setCity(e.currentTarget.value)
    }} />
    <BiSearch className="location" 
    onClick={handleSearchClick}/>
  </div>
  )
}

