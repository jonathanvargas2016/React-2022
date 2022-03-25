import { getHeroeById } from "./bases/08-imp-export"
import { getHeroesByOwner } from "./bases/08-imp-export"

// const promesa = new Promise((resolve, reject) =>{

//     setTimeout(()=>{

//         const heroe = getHeroeById(2)
//         //resolve(heroe)
//         reject("No se encontro el heroe")
//     }, 2000)

// })

// promesa.then((heroe)=>{
//     console.log(heroe)
// }).catch( err => console.error(err))

// ejecucion de promesa
/**
 * 1. then
 * 2. catch
 * 3. finally
 */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id)
            
            if(heroe){
                resolve(heroe)
            }else{
                reject("No se encontro el heroe")
            }
        }, 2000)
    })
}

// getHeroeByIdAsync(10)
//     .then( heroe => console.log('heroe', heroe))
//     .catch( err => console.error(err))

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.error)