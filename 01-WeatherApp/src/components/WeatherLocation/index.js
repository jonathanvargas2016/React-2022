import React, {Component} from 'react'
import Location from "./location";
import WeatherData from "./WeatherData";
import './styles.css'
import PropTypes from 'prop-types';
import {
    SUN,
    WINDY
} from '../../constants/Weathers';

const location = 'Quito'
const key = '927958a9f637a1a8b0e46e9118bf112b'
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`

const data1 = {
    temperature:20,
    weatherState:SUN,
    humidity:10,
    wind:'10 m/s'

}

//***********functional component*********
//     const WeatherLocation = () =>(
//
//         <div className='weatherLocationCont'>
//             <Location city={'Cuenca'}></Location>
//             <WeatherData data={data}/>
//         </div>
//     );


//****transformacion del functional component to Class component
class WeatherLocation extends Component {

    constructor() {
        super();
        //el estado de este componente...
        this.state = {
            data:data1,
            city:'Quito'
        }
    }

    //funcion
    handleUpdateClick = async () =>{

        //peticion mediante fetch
        fetch(api_weather)
            .then(response => response.json())
            .then(weather_data => {
                console.log(weather_data)
                const data = this.getData(weather_data)
                //modifico los datos con setState
                this.setState({data})
            })
            .catch((error)=>console.error(error))


        //modifico los datos con setState
        // this.setState({
        //     data:data2
        // })
    }
    getWeatherState = (weather) =>{
        console.log(weather)
        return SUN
    }

    getData = weather_data =>{
        const {humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data.weather);

        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/s`

        }
        return data
    }

    //renderizacion
    render = () => {
        const {city,data} = this.state
        return (
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}





//validar el objeto
WeatherLocation.propType = {
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired
    })
}

//importante se debe usar
export default WeatherLocation;