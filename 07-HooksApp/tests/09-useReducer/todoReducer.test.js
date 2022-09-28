import { todoReducer } from "../../src/09-useReducer/todo-reducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState)

        //*comentario: se usa toBe porq evalua q es el mismo objecto, apunta al mismo espacio de memoria.. No se uso el toEqual
        expect(newState).toBe(initialState)

    })


    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)

        //*comentario: toContain evalua q el contenido sea el esperado
        expect(newState).toContain(action.payload)

    })
    test('debe de eliminar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }


        const newState = todoReducer(initialState, action)

        console.log(newState)
        const actionRemove = {
            type: '[TODO] Remove Todo',
            payload: 2
        }

        const newStateRemove = todoReducer(newState, actionRemove)
        console.log(newStateRemove)

        expect(newStateRemove.length).toBe(1)
        expect(newStateRemove).toEqual(initialState)


    })


    test('Debe de realizar el Toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBeTruthy()

    })

})