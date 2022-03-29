import React, { Fragment } from 'react';
//                          properties
const PrimeraApp = ( { saludo = "Hola Mundo", nombre } ) => {

    console.log(saludo)
    console.log(nombre)

        return (
            // fragment forma corta
            // <>
            //  <h1>Hola Mundo</h1>
            //  <p>Bienvenido</p>
            // </>

            <Fragment>
                <h1> {saludo} </h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
                <p>Bienvenido { nombre } </p>
            </Fragment>
        )

}

export default PrimeraApp

