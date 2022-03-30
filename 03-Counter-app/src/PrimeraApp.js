import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

//                          properties
const PrimeraApp = ( { saludo, subtitulo} ) => {

    console.log(saludo)
    console.log(subtitulo)

        return (
            // fragment forma corta
            // <>
            //  <h1>Hola Mundo</h1>
            //  <p>Bienvenido</p>
            // </>

            <Fragment>
                <h1> {saludo} </h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
                <p>Bienvenido { subtitulo } </p>
            </Fragment>
        )

}
// definir el tipo
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps = {
    subtitulo: 'Dragon Ball Z'
}
export default PrimeraApp

