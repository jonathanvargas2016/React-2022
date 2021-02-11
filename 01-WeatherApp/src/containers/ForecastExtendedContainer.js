import React, {Component} from 'react';
import ForecastExtended from "../components/ForecastExtended";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ForecastExtendedContainer extends Component {


    render() {
        console.log(this.props)
        return (
            this.props.city&&
                <ForecastExtended city = {this.props.city}></ForecastExtended>

        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired
}
const mapStateToProps = ({city}) => ({city})
//const mapStateToProps = state => ({city:state.city})
export default connect(mapStateToProps,null)(ForecastExtendedContainer);