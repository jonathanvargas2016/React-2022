import moment from 'moment';
import 'moment/locale/es'
import TransformWeather from '../services/transformWeather'

const TransformForecast = data =>(

     data.list.filter(item =>{

        return moment.unix(item.dt).utc().hour() === 6 ||
            moment.unix(item.dt).utc().hour() === 12 ||
            moment.unix(item.dt).utc().hour() === 18
    }).map(item =>{
        return {
            weekDay:moment.unix(item.dt).format('ddd'),
            hour:moment.unix(item.dt).hour(),
            data:TransformWeather(item)
        }
     })
)

export default TransformForecast;