const saludar = function saludar(nombre){
    return `Hola ${nombre}`
}

console.log(saludar('Goku'))

const saludar2 = nombre => `hola ${nombre}`

const saludar3 = () => "Hola Mundo"
console.log(saludar2('Vegeta'));

const getUser = () => (
    {
        uid: 123,
        username: 'El_jonat01'
    }
)

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = nombre => (
    {
        uid: 'ABC567',
        username: nombre
    }
)

console.log(usuarioActivo('Jonathan'));