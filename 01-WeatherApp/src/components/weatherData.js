import React from "react";
import WeatherTemperature from "./weatherTemperature";
import WeatherExtraInfo from "./weatherExtraInfo";

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={'sun'} />
        <WeatherExtraInfo wind={'10m/s'} huminity={80} />
    </div>
)

export default WeatherData;
