import React from "react";
import WeatherTemperature from "./weatherTemperature";
import WeatherExtraInfo from "./weatherExtraInfo";
import './style.css'

const WeatherData = ({data}) => {
    const {temperature,weatherState,humidity,wind} = data
    return <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo wind={wind} humidity={humidity} />
    </div>

}
export default WeatherData;
