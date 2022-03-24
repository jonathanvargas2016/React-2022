const personajes = ['Goku', 'Vegeta', 'Trunks']

// extraer primer elemento
const [p1] = personajes //renombrar nombre con F2
console.log(p1)

// extraer segundo elemento
const [, p2] = personajes //renombrar nombre con F2
console.log(p2)

// extraer tercer elemento
const [, , p3] = personajes //renombrar nombre con F2
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 1234]
}

// desestructuracion del arreglo
const [letras, numeros] = retornaArreglo()
console.log(letras)
console.log(numeros)


const usoEstado = valor => (
    [valor, ()=> console.log('Hola Mundo')]
)

const [nombre, setNombre] = usoEstado('Goku')

console.log(nombre)
setNombre()
