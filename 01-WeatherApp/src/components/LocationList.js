import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from 'prop-types';


const LocationList = ({cities,onSelectedLocation}) => {
    const handleWeatherLocationClic = city => {
        console.log('handleWeatherLocationClic');
        onSelectedLocation(city);
    }

    const strToComponent = cities => {

        //map --> transformaciones de arrays. **Es necesario utilizar una clave
        return (cities.map(city => (
            <WeatherLocation key={city}
                             city={city}
                             onWeatherLocationClic={()=>{handleWeatherLocationClic(city)}}>
            </WeatherLocation>)
        ))
    }


    return (<div>
        {strToComponent(cities)}
    </div>)
}

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}

export default LocationList;