const saludar = function(nombre){
    return `Hola ${nombre}`
}

console.log(saludar('Goku'))

const saludar2 = nombre => `hola ${nombre}`

const saludar3 = () => "Hola Mundo"
console.log(saludar2('Vegeta'));

// devuelve solo un objeto
const getUser = () => (
    {
        uid: 123,
        username: 'El_jonat01'
    }
)
console.log(getUser())

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

// retorna un objecto implicito
const usuarioActivo = nombre => (
    {
        uid: 'ABC567',
        username: nombre
    }
)

console.log(usuarioActivo('Jonathan'));