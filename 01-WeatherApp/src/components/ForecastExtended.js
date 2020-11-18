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

    async updateCity (city){
        const url_forecast = `${this.url}?q=${city}&appid=${this.key}&units=metric`
        const res = await fetch(url_forecast)
        const data = await res.json()
        const forecastData = TransformForecast(data)
        this.setState({forecastData})
    }


    async componentDidMount() {
        this.updateCity(this.props.city)
    }

    //ciclo de vida para actualizaciones
    componentWillReceiveProps(nextProps) {
        if(nextProps.city != this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }

    

    renderForecastItemDays = (forecastData) =>{
        //array de dias
        return forecastData.map(forecast => (
            <ForecastItem weekDay={forecast.weekDay}
                          key={`${forecast.weekDay} ${forecast.hour}`}
                          hour={forecast.hour}
                          data={forecast.data}>

            </ForecastItem>
        ))

    }

    render = ()=> {

        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className='forescast-title'>Pronostico extendido para {city}</h2>
                {forecastData?
                    this.renderForecastItemDays(forecastData):this.renderProgress()}
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
