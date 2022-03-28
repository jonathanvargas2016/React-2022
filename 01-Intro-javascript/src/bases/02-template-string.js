
const nombre = "Jonat"
const apellido = "Vargas"

const nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// ********** TEMPLATE STRING
const nombreCompleto2 = `Hola mundo soy ${nombre} ${apellido}`
console.log(nombreCompleto2);

// llamar funcion dentro del template string

function getSaludo(nombre){
    return 'hola ' + nombre
}

console.log(`Este es un texto ${getSaludo(nombre)}`);