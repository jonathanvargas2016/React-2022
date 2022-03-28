import React, {Component} from 'react';
import ForecastExtended from "../components/ForecastExtended";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getForecastDataFromCities,getCity} from '../reducer'

class ForecastExtendedContainer extends Component {


    render() {
        const {city,forecastData} = this.props
        return (
            city&&
                <ForecastExtended city = {city} forecastData={forecastData}></ForecastExtended>

        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
}
const mapStateToProps = state => ({city:getCity(state),forecastData:getForecastDataFromCities(state)})
//const mapStateToProps = ({city, cities}) =>({city,forecastData:cities[city] && cities[city].forecastData})
//const mapStateToProps = state => ({city:state.city})
export default connect(mapStateToProps,null)(ForecastExtendedContainer);