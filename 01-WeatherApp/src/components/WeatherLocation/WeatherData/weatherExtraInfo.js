import React from "react";
import PropTypes from 'prop-types';
import './style.css'

const WeatherExtraInfo = ({huminity,wind}) =>(
    <div className='weatherExtraInfoCont'>
        <span className='extraInfoText'>{`Humedad: ${huminity} %`}</span>
        <span className='extraInfoText'>{`Vientos: ${wind}`}</span>

    </div>
)
WeatherExtraInfo.propTypes = {
    huminity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired
}


export default WeatherExtraInfo