import React, { useState } from 'react';

import { ImLocation } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import './Input.css'
import data from '../db.json'
export const Input = ({setQuery,setDisplay}) => {
    
  const [city,setCity] = useState('');
 
  const handleOnChange =(e)=>{
    filterData(e.target.value);
    setCity(e.target.value)
    
  }
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
  // Autosuggetion data handeling

  const filterData =(text)=>{
    let matches = data.filter((x)=>{
      const regex = new RegExp(`${text}`, "gi");
      return x.city.match(regex) || x.state.match(regex);
    })
    setDisplay(matches)
  }
  return (
    <>
     <div className="inputBox">
    <ImLocation className="location"onClick={handleLocationClick} />
    <input type='text' placeholder='Search for city...'
    value={city} onChange={handleOnChange} />
    <BiSearch className="location" 
    onClick={handleSearchClick}/>
  </div>
    <div className='dropdown'>
      {data.map((item)=>
      <div className='dropdown-row'>
       
      </div>
      )}
    </div>
    </>
   
  )
}

