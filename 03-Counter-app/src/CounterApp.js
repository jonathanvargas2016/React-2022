import React, { useState } from "react"
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    // useState
    const [counter, setCounter] = useState( value );
    // para cambiar el valor del useState se lo debe hacer desde la funcion setNombre
    

    // handleAdd 
    // const handleAdd = e => console.log(e)
    const handleAdd = () => {
        // setCounter(counter + 1)
        setCounter(c => c + 1) // retorna el nuevo valor q tendra el counter
        
    }

    const handleReset = () => setCounter(counter - 1)

    const handleSubtract = () => setCounter(value)

    return <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        {/* <button onClick={ e => handleAdd(e)}> + 1 </button> */}
        <button onClick={ handleAdd }> + 1 </button>
        <button onClick={ handleSubtract }> Reset </button>
        <button onClick={ () => handleReset() }> - 1 </button>

    </>
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp


// rafcp ---> crear un functional component incluye properties