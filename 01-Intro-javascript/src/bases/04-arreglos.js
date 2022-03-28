//  Arreglos en JS 

// const arreglo = new Array(100)
// arreglo.push(1)
// arreglo.push(2)

const arreglo = []
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)

// no es recomedable utilizar push porque modifica el arreglo principal

let arreglo2 = [...arreglo, 2] //clonacion de arreglo
console.log(arreglo2)

const arreglo3 = arreglo2.map((numero)=>{
    return numero * 2
})

console.log("arreglo 3 ", arreglo3);