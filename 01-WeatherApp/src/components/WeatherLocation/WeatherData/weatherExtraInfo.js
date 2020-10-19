import React from "react";
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({huminity,wind}) =>(
    <div>
        <span>{`${huminity} % | `}</span>
        <span>{`${wind} wind`}</span>

    </div>
)
WeatherExtraInfo.propTypes = {
    huminity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired
}


export default WeatherExtraInfo