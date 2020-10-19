import React from "react";
import WeatherTemperature from "./weatherTemperature";
import WeatherExtraInfo from "./weatherExtraInfo";
import {
    SNOW
} from "../../../constants/Weathers";

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SNOW} />
        <WeatherExtraInfo wind={'10m/s'} huminity={80} />
    </div>
)

export default WeatherData;
