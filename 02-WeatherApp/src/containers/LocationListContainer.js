import React, {Component} from 'react';
import LocationList from "../components/LocationList";
import {setSelectedCity,setWeather} from '../actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getWeatherCities, getCity} from '../reducer'


//connect sirve para conectar react y redux...

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSelectedCity, cities,city} = this.props;
        setWeather(cities)
        setSelectedCity(city);
    }

    handleSelectedLocation = (city) =>{
        // this.setState({
        //     city,
        // })

        // store.dispatch(
        //     setCity(city) //Accion
        //     )//ayuda a disparar la accion

        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <div>
                <LocationList cities={this.props.citiesWeather}
                              onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
            </div>
        );
    }
}
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}


const mapDispatchToPropsActions = dispatch =>({
    setSelectedCity: value =>dispatch(setSelectedCity(value)),
    setWeather:cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state),
                                   city: getCity(state)})
const LocationListContainerConnect = connect(mapStateToProps,mapDispatchToPropsActions)(LocationListContainer)//retorna otra funcion....

//CONNECT
//se utiliza sobre cada componente que queramos darle acceso al store
//de alguna manera le envuelve al componente
//y le ofrece la capacidad de acceder al store
export default LocationListContainerConnect;