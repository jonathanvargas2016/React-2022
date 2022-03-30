import React from "react"
import PropTypes from 'prop-types'

const CounterApp = ( { value }) => (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

    </>
)

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp


// rafcp ---> crear un functional component incluye properties