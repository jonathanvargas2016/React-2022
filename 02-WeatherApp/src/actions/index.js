import TransformForecast from "../services/transformForecast";
import TransformWeather from '../services/transformWeather'
import {now} from "moment";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

const setForecastData = payload =>({type:SET_FORECAST_DATA,payload})
const setCity = payload => ({type:SET_CITY,payload});//literal correspondiente a la ciudad seleccionada

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const key = '927958a9f637a1a8b0e46e9118bf112b'
const url = 'http://api.openweathermap.org/data/2.5/forecast'
const url_weather = 'http://api.openweathermap.org/data/2.5/weather'

export const setSelectedCity = payload =>{

//payload -> ciudad q el usuario selecciono
    
    return async (dispatch, getState) =>{

        const url_forecast = `${url}?q=${payload}&appid=${key}&units=metric`
        dispatch(setCity(payload))//establecer la ciudad actual
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        if(date && (now() - date) < 1 * 60 * 1000){
            return;
        }
        const res = await fetch(url_forecast)
        const data = await res.json()
        const forecastData = TransformForecast(data)
        dispatch(setForecastData({city: payload, forecastData}))

    };
}


export const setWeather = payload =>{

    return async dispatch => {

        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${key}&units=metric`
            fetch(api_weather).then(data =>{
                return data.json();
            }).then(weather_data =>{
                const weather = TransformWeather(weather_data);
                dispatch(setWeatherCity({city, weather}));
            })

        })
    }


}
