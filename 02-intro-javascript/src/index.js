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


const retornaPersona = ({nombre}) => {
    console.log(nombre);
}

retornaPersona(persona)












