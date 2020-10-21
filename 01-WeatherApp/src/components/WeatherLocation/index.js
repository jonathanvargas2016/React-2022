import React from 'react'
import Location from "./location";
import Index from "./WeatherData";
import './styles.css'

const WeatherLocation = () =>(

    <div className='weatherLocationCont'>
        <Location city={'Cuenca'}></Location>
        <Index/>
    </div>
);

//importante se debe usar
export default WeatherLocation;