// IMPORT, EXPORT

import {heroes} from './data/heroes'
// import tecleo = imp

console.log(heroes)


const getHeroeById = id => (
    heroes.find((element)=> element.id === id)
)

console.log('By Find ',getHeroeById(1))

const getHeroesByOwner = owner => (
    heroes.filter((heroe)=> heroe.owner === owner)
)
console.log("By filter ",getHeroesByOwner('DC'))

