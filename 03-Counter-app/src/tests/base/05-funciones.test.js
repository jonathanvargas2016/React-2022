import '@testing-library/jest-dom/extend-expect';

import { getUser, getUsuarioActivo } from '../../base/05-funciones'
describe('Pruebas en 05-Funciones', () => {
    test('getUser debe retornar un objeto', () => {
        // no se puede evaluar objetos con toBe debido a que los objetos apuntan de diferentes espacios de memoria
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(user).toEqual(userTest)

    })
    test('getUserActivo debe retornar un objeto', () => {
        const nombre = 'Jona'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre)
        expect(userActivo).toEqual(userTest)
    })
})