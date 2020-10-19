import React from "react";
import PropTypes from 'prop-types';

//mediante props extraigo los parametros enviados desde otro componente
//{} -> con esto se pone el valor de una variable en el html

//DESTRUCTURING
    // const usuario ={
    //     nombre:'Jona',
    //     apellido:'Vargas'
    //
    // }
    // const {nombre,apellido} = usuario
    // console.log(nombre)
    // console.log(apellido)

//cambiar nombre a las propiedades de origen OBJECT DESTRUCTURING
    //const {nombre:nombreUsuario,apellido:apellidoUsuario} = usuario


const Location = ({city}) =>{ //destructuring
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}

Location.propTypes = {
    city:PropTypes.string.isRequired
}

export default Location;