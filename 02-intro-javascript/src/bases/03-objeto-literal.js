//cada objeto tiene su prototype
const persona = {
    nombre: 'Tony',
    apellido: 'Vegas',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5524441,
        lat: 14.3022,
        lng: 348551221,
    },
}

console.log({persona});
console.log(persona)

// clonar un objeto
const persona2 = {...persona}// operador SPREAD
persona2.nombre = 'Kevin'
console.log(persona2)
