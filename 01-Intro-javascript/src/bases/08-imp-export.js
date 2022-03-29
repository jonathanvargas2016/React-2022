// IMPORT, EXPORT
// importacion por defecto, { importacion independiente }
import heroes, {Owners} from '../data/heroes'
// import tecleo = imp

console.log(heroes)
console.log(Owners)

export const getHeroeById = id => (
    heroes.find((element)=> element.id === id)
)

console.log('By Find ',getHeroeById(1))

export const getHeroesByOwner = owner => (
    heroes.filter((heroe)=> heroe.owner === owner)
)
console.log("By filter ",getHeroesByOwner('DC'))

