import React from 'react'
import Location from "./location";
import WeatherData from "./weatherData";

const WeatherLocation = () =>(

    <div>
        <Location city={'Cuenca'}></Location>
        <WeatherData/>
    </div>
);

//importante se debe usar
export default WeatherLocation;