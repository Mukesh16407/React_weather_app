import React, { useState,useEffect } from 'react';
import { getFormattedWeatherData } from './Service/service';

import { ImLocation } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import './Input.css'
export const Input = ({setQuery}) => {

  const [city,setCity] = useState('');
  //const [isLoading, setIsLoading] = useState(false);
  const [result , setResult] = useState([]);

  const debouncingSearch = useDebouncing(city,1000);

  useEffect(()=>{
    if(debouncingSearch){
     
      getFormattedWeatherData({q:debouncingSearch}).then((result)=>{
        //console.log(result);
        setResult([...result])
       
      })
    }
  },[debouncingSearch]);

  console.log(result)
  const handleOnChange =(e)=>{
   
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

  // const filterData =(text)=>{
  //   let matches = data.filter((x)=>{
  //     const regex = new RegExp(`${text}`, "gi");
  //     return x.city.match(regex) || x.state.match(regex);
  //   })
  //   setDisplay(matches)
  // }
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
      {result.filter(item =>{
        const searchTerm = city.toLowerCase();
        const cityName = item.toLowerCase();
        return searchTerm && cityName.startsWith(searchTerm);
      }).map((item)=>
          <div className='dropdown-row'
          >{item}</div>
        
      )}
    </div>
    </>
   
  )
}


function useDebouncing(value, delay) {
  
  const [ debouncing, setDebouncing] = useState(value);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncing(value)
    },delay)
   
    return ()=>{
      clearTimeout(handler)
    }
  },[value, delay]);
  return debouncing
}