import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from 'prop-types';

const strToComponent = cities =>(
    //map --> transformaciones de arrays. **Es necesario utilizar una clave
    cities.map((city)=>(<WeatherLocation key={city} city={city}></WeatherLocation>))
)

const LocationList = ({cities}) => (
    <div>
        {strToComponent(cities)}
    </div>
)



LocationList.propTypes = {
    cities:PropTypes.array.isRequired
}


export default LocationList;