import React, {Component} from 'react';
import LocationList from "../components/LocationList";
import {setSelectedCity,setWeather} from '../actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
//connect sirve para conectar react y redux...

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities)
    }

    handleSelectedLocation = (city) =>{
        // this.setState({
        //     city,
        // })

        // store.dispatch(
        //     setCity(city) //Accion
        //     )//ayuda a disparar la accion

        this.props.setCity(city);
    }

    render() {
        return (
            <div>
                <LocationList cities={this.props.cities}
                              onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
            </div>
        );
    }
}
LocationListContainer.propTypes = {
    setCity:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
}


const mapDispatchToPropsActions = dispatch =>({
    setCity: value =>dispatch(setSelectedCity(value)),
    setWeather:cities => dispatch(setWeather(cities))
});
const LocationListContainerConnect = connect(null,mapDispatchToPropsActions)(LocationListContainer)//retorna otra funcion....

//CONNECT
//se utiliza sobre cada componente que queramos darle acceso al store
//de alguna manera le envuelve al componente
//y le ofrece la capacidad de acceder al store
export default LocationListContainerConnect;