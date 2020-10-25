import {
    SUN,

} from '../constants/Weathers';

const getWeatherState = (weather) =>{
    //console.log(weather)
    return SUN
}

const TransformWeather = weather_data =>{
    const {humidity,temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather);

    const data = {
        humidity,
        temperature:temp,
        weatherState,
        wind:`${speed} m/s`

    }
    return data
}

export default TransformWeather;