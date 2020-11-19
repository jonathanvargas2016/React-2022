import React, {Component} from 'react'
import Location from "./location";
import WeatherData from "./WeatherData";
import './styles.css'
import PropTypes from 'prop-types';
import TransformWeather from "../../services/transformWeather";
import CircularProgress from '@material-ui/core/CircularProgress';

const key = '927958a9f637a1a8b0e46e9118bf112b'
const url = 'http://api.openweathermap.org/data/2.5/weather'


// const data1 = {
//     temperature:20,
//     weatherState:SUN,
//     humidity:10,
//     wind:'10 m/s'
//
// }

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

    constructor({city}) {
        super();
        //el estado de este componente...
        this.state = {
            data:null,
            city,
        }
    }

    //funcion
    handleUpdateClick = (api_weather) =>{

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

    //se ejecuta una unica vez
    componentDidMount() {
        const {city} = this.state
        const api_weather = `${url}?q=${city}&appid=${key}&units=metric`
        this.handleUpdateClick(api_weather);
    }

    //se ejecuta despues de que el componente fue renderizado
    // componentDidMount() {
    //     console.log('componentDidMount')
    // }
    //Este método del ciclo de vida es de tipo montaje.
    // Se ejecuta justo antes del primer renderizado del componente
    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }
    //
    //Método de actualización que se ejecuta
    // justamente después de haberse producido la actualización del componente
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('componentDidUpdate')
    // }


    //renderizacion
    render = () => {
        const {onWeatherLocationClic} = this.props
        const {city,data} = this.state
        return (

            <div className='weatherLocationCont' onClick={onWeatherLocationClic}>
                <Location city={city}></Location>
                {data? <WeatherData data={data}/>:<CircularProgress color="secondary" />}
                {/*<button onClick={this.handleUpdateClick}>Actualizar</button>*/}
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
        wind:PropTypes.string.isRequired,

    }),
    city:PropTypes.string.isRequired,
    onWeatherLocationClic:PropTypes.func,
}

//importante se debe usar
export default WeatherLocation;