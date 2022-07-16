import React from "react";
import "./Details.css";
import { formatToLocalTime} from "./Service/service";


export const Details = ({
  weather: {
    timezone,
    sunrise,
    sunset,
    pressure,
    humidity,
    
  },
}) => {
  return (
    <>
     
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
       
    </>
  );
};
