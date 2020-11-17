import React,{Component} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem'
import TransformForecast from '../services/transformForecast'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]
//
// const data = {
//     temperature:10,
//     weatherState:'normal',
//     humidity:20,
//     wind:'normal',
// }

class ForecastExtended extends Component {
    key = '927958a9f637a1a8b0e46e9118bf112b'
    url = 'http://api.openweathermap.org/data/2.5/forecast'

    constructor() {
        super();
        this.state = {
            forecastData:null,
        }
    }
    async componentDidMount() {
        const url_forecast = `${this.url}?q=${this.props.city}&appid=${this.key}`
        const res = await fetch(url_forecast)
        const data = await res.json()
        console.log(data)
        const forecastData = TransformForecast(data)
        this.setState({forecastData})
    }

    renderForecastItemDays = () =>{
        //array de dias
        // return days.map(day => (<ForecastItem weekDay={day}
        //                                       key={day}
        //                                       hour={10}
        //                                       data={data}>
        //
        //     </ForecastItem>
        // ))

        return (<h1>'Render Items'</h1>)

    }

    render = ()=> {

        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className='forescast-title'>Pronostico extendido para {city}</h2>
                {forecastData?
                    this.renderForecastItemDays():this.renderProgress()}
            </div>
        )
    }
    renderProgress = ()=>{
        return (
            <h3>
                'Cargando Pronostico extendido...'
            </h3>
        )
    }
}

ForecastExtended.propType = {
    city:PropTypes.string.isRequired
}

export default ForecastExtended;
