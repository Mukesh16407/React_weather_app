import React from "react";
import { iconUrlFromCode } from "./Service/service";
import "./WeeklyForCast.css";
export const WeeklyForCast = ({ items }) => {
    return (
        <div className="weeklyWeather">
      {items.map((item=> 
        
            <div className="flex-col">
            <p>{item.title}</p>
            <p>
              {`${item.temp.toFixed()}`}
              <sup>o</sup>C
            </p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
              style={{ width: "25px" }}
            />
            <p>{item.type}</p>
          </div>
        )
       
      )}
    </div>
  );
};
