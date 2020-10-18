import React from "react";

const WeatherExtraInfo = ({huminity,wind}) =>(
    <div>
        <span>{`${huminity} % | `}</span>
        <span>{`${wind} wind`}</span>

    </div>
)

export default WeatherExtraInfo