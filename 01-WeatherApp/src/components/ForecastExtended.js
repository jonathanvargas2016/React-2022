import React from "react";
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem'

const renderForecastItemDays = (forecastData) =>{
    //array de dias
    return forecastData.map(forecast => (
        <ForecastItem weekDay={forecast.weekDay}
                      key={`${forecast.weekDay} ${forecast.hour}`}
                      hour={forecast.hour}
                      data={forecast.data}>

        </ForecastItem>
    ))

}

const renderProgress = ()=>{
    return (
        <h3>
            'Cargando Pronostico extendido...'
        </h3>
    )
}


const  ForecastExtended = ({city,forecastData}) => (
    <div>
        <h2 className='forescast-title'>Pronostico extendido para {city}</h2>
        {forecastData?
            renderForecastItemDays(forecastData):renderProgress()}
    </div>

)

ForecastExtended.propType = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array.isRequired,
}

export default ForecastExtended;
