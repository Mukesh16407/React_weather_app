import React from "react";

import { WeatherGraph } from "./WeatherGraph";
import "./Details.css";
import { formatToLocalTime, iconUrlFromCode } from "./Service/service";


export const Details = ({
  weather: {
    dt,
    details,
    timezone,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    pressure,
    humidity,
    feels_like,
   
  },
}) => {
  return (
    <div className="bodyBox">
      <div className="date">
        <p>{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="tempRow">
        <div>{`${temp}`}<sup>o</sup>C</div>
        <div>
          <img src={iconUrlFromCode(icon)} alt="" />
        </div>
      </div>
      <WeatherGraph />
      <div className="otherDetails">
        <div className="div1">
          <div className="insideDiv">
            <h3>Pressure:</h3>
            <p>{`${pressure}`}pa</p>
          </div>
          <div className="insideDiv">
            <h3>Humidity:</h3>
            <p>{`${humidity}`}%</p>
          </div>
        </div>
        <div className="div2">
          <div className="insideDiv">
            <h3> Sunrise:</h3>
            <p>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</p>
          </div>
          <div className="insideDiv">
            <h3>Sunset:</h3>
            <p>{formatToLocalTime(sunset,timezone,"hh:mm a")}</p>
          </div>
        </div>
      </div>
      <div className="dailyWeather">
        <div>
          <p>min-temp</p>
          <h3>{`${temp_min.toFixed()}`}<sup>o</sup>C</h3>
        </div>
        <div>
          <p>speed</p>
          <h3>{speed}km/h</h3>
        </div>
        <div>
          <p>Weather</p>
          <h3>{details}</h3>
        </div>
        <div>
          <p>max-temp</p>
          <h3>{`${temp_max.toFixed()}`}</h3>
        </div>

      </div>
      
    </div>
  );
};
