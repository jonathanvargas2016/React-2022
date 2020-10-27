import {
    CLOUDY,
    SNOW,
    SUN,
    RAIN,
    THUNDER,
    DRIZZLE

} from '../constants/Weathers';

const getWeatherState = weather_data =>{
    const {id} = weather_data[0]

    if(id < 300){
        return THUNDER
    }
    if(id < 400){
        return DRIZZLE
    }
    if(id < 600){
        return RAIN
    }
    if(id < 700){
        return SNOW
    }
    if(id === 800){
        return SUN
    }else{
        return CLOUDY
    }

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