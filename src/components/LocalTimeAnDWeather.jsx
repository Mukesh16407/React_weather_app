import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from "./Service/service";

const LocalTimeAnDWeather = ({weatherCondition:{ dt, icon,
    temp, timezone,}}) => {
  return (
    <div>
         <div className="date">
        <p>{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="tempRow">
        <div>{`${temp}`}<sup>o</sup>C</div>
        <div>
          <img src={iconUrlFromCode(icon)} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LocalTimeAnDWeather