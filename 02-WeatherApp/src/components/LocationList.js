import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from 'prop-types';
import './styles.css'

const LocationList = ({cities,onSelectedLocation}) => {
    const handleWeatherLocationClic = city => {
        onSelectedLocation(city);
    }

    const strToComponent = cities => {

        //map --> transformaciones de arrays. **Es necesario utilizar una clave
        return (cities.map(city => (
            <WeatherLocation key={city.key}
                             city={city.name}
                             onWeatherLocationClic={()=>{handleWeatherLocationClic(city.name)}}
                             data={city.data}>
            </WeatherLocation>)
        ))
    }


    return (<div className='locationList'>
        {strToComponent(cities)}
    </div>)
}

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}

export default LocationList;