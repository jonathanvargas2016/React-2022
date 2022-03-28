// operador condicional ternario
const activo = true

// let mensaje = ''
// if(activo){
//     mensaje = 'activo'
// }else{
//     mensaje = 'inactivo'
// }

const mensaje = activo ? 'Activo' : 'Inactivo'
console.log(mensaje)

// solo se ejecute una condicion

const mensajeUnicaCondicion = activo && 'Activo'
// const mensajeUnicaCondicion = (activo == true) && 'Activo'
console.log(mensajeUnicaCondicion)