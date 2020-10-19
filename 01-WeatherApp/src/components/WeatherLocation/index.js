import React from 'react'
import Location from "./location";
import Index from "./WeatherData";

const WeatherLocation = () =>(

    <div>
        <Location city={'Cuenca'}></Location>
        <Index/>
    </div>
);

//importante se debe usar
export default WeatherLocation;