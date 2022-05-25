import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
    test('Debe de retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(heroe => heroe.id === id)
        expect(heroe).toEqual(heroeData)
    })
    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id)
        expect(heroe).toBe(undefined)
    })

    test('Debe de retornar los heroes de DC', () => {

        const owner = "DC"
        const heroes = getHeroesByOwner(owner)
        const heroesDataOwner = heroes.filter(heroe => heroe.owner === owner)
        expect(heroes).toEqual(heroesDataOwner)
    })
    test('Debe de retornar los heroes de Marvel', () => {

        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner)
        // const heroesDataOwner = heroes.filter(heroe => heroe.owner === owner)
        expect(heroes.length).toBe(2)
    })
})