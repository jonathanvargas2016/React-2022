import TransformForecast from "../services/transformForecast";
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_CITY = "SET_CITY";
export const SET_WEATHER = 'SET_WEATHER'

const setForecastData = payload =>({type:SET_FORECAST_DATA,payload})
const setCity = payload => ({type:SET_CITY,payload});//literal correspondiente a la ciudad seleccionada

const key = '927958a9f637a1a8b0e46e9118bf112b'
const url = 'http://api.openweathermap.org/data/2.5/forecast'


export const setSelectedCity = payload =>{

//payload -> ciudad q el usuario selecciono
    
    return async dispatch =>{

        const url_forecast = `${url}?q=${payload}&appid=${key}&units=metric`
        dispatch(setCity(payload))//establecer la ciudad actual

        const res = await fetch(url_forecast)
        const data = await res.json()
        const forecastData = TransformForecast(data)
        console.log(forecastData)
        dispatch(setForecastData({city:payload,forecastData}))

        //modificar el estado con el resultado de la promise...
    };
}


export const setWeather = payload =>{


    const key = '927958a9f637a1a8b0e46e9118bf112b'
    const url = 'http://api.openweathermap.org/data/2.5/weather'

        const {city} = this.state
        const api_weather = `${url}?q=${city}&appid=${key}&units=metric`
        //peticion mediante fetch
        fetch(api_weather)
            .then(response => response.json())
            .then(weather_data => {
                const data = TransformWeather(weather_data)
                //modifico los datos con setState
                this.setState({data})
            })
            .catch((error)=>console.error(error))

        //modifico los datos con setState
        // this.setState({
        //     data:data2
        // })




}
