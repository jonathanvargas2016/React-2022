import React from 'react'
import Location from "./location";
import WeatherData from "./WeatherData";
import './styles.css'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';


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





const WeatherLocation = ({onWeatherLocationClic,city,data})=> (
    <div className='weatherLocationCont' onClick={onWeatherLocationClic}>
        <Location city={city}></Location>
        {data? <WeatherData data={data}/>:<CircularProgress color="secondary" />}
    </div>
)

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