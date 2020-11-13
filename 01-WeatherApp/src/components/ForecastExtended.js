import React,{Component} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem'

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature:10,
    weatherState:'normal',
    humidity:20,
    wind:'normal',
}

class ForecastExtended extends Component {

    renderForecastItemDays(){
        //array de dias
        return days.map(day => (<ForecastItem weekDay={day} key={day} hour={10} data={data}></ForecastItem>))

    }

    render = ()=> {

        const {city} = this.props

        return(
            <div>
                <h2 className='forescast-title'>Pronostico extendido para {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.propType = {
    city:PropTypes.string.isRequired
}

export default ForecastExtended;
