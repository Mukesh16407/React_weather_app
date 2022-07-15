import {DateTime} from 'luxon'
const apiKey = "dd7fa73e412e7d4b26a84b058a427602";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: apiKey });
  
  return fetch(url).then((res) => res.json());
};


const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_max, temp_min, pressure, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    pressure,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForeCastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map(d=>{
    return{
        title:formatToLocalTime(d.dt,timezone,'ccc'),
        temp:d.temp.day,
        icon:d.weather[0].icon,
        type:d.weather[0].main
    }
  });
  hourly = hourly.slice(1, 6).map(d=>{
    return{
        title:formatToLocalTime(d.dt,timezone,'hh:mm a'),
        temp:d.temp,
        icon:d.weather[0].icon
    }
  });
  return {timezone,daily,hourly}
};

export const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForCastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForeCastWeather);
  return {...formattedCurrentWeather,...formattedForCastWeather};
};

export const formatToLocalTime = (secs,zone,format ="cccc,dd,LLL yyyy' Local time:'hh:mm a")=>DateTime.fromSeconds(secs)
.setZone(zone).toFormat(format);

export const iconUrlFromCode =(code)=>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

