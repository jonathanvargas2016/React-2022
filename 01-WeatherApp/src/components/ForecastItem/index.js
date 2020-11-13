import React from "react";
import PropTypes from 'prop-types'
import WeatherData from "../WeatherLocation/WeatherData";



const ForecastItem = ({weekDay,hour,data}) =>{
    return (
        <div>
            <div>{weekDay} hora:{hour} hs</div>
            <WeatherData data={data}></WeatherData>
        </div>

    )
}

ForecastItem.propTypes = {
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,

    }),
}


export default ForecastItem;