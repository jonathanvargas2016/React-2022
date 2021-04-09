import React from "react";
import WeatherTemperature from "./weatherTemperature";
import WeatherExtraInfo from "./weatherExtraInfo";
import './style.css'
import PropTypes from 'prop-types';


const WeatherData = ({data}) => {
    const {temperature,weatherState,humidity,wind} = data
    return <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo wind={wind} humidity={humidity} />
    </div>

}

WeatherData.propType ={
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    })
}

export default WeatherData;
