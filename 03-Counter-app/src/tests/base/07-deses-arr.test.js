import "@testing-library/jest-dom"
import { retornaArreglo } from "../../base/07-deses-arr"

describe("Prueba en desestructuracion", () => {
    test('Debe de retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo()

        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')

    })
})