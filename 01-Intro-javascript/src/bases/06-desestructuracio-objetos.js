// Desestructuracion. o
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
}


const {nombre, edad, clave} = persona

const {nombre: nombre2} = persona

console.log(edad);

// anadir valores por defecto
const retornaPersona = ({nombre, edad, clave, rango = "Capitan"}) => {
    console.log("persona ", nombre, edad, clave, rango);
}


const avenger  = retornaPersona(persona)

const retornaEdadPersona = ({edad}) => {
    console.log("edad persona ", edad);
}
retornaEdadPersona(persona)


const userData = ({nombre, edad, clave, rango = "Capitan"}) => {
    return  {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latLng: {lat, lng } } = userData(persona)
console.log(nombreClave, anios)
console.log(lat, lng)














