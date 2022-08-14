import { AddCategory } from "../../src/components/AddCategory"
import { fireEvent, render, screen } from '@testing-library/react'

describe('Pruebas en <AddCategory />', () => {
    test('Debe de cambiar elvalor de la caja de texto ', () => {

        render(<AddCategory onNewCategory={() => { }} />)

        // para disparar un evento se debe tener referencia al elemento
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Dragon Ball Z' } }) //disparar evento input

        screen.debug()

        expect(input.value).toBe('Dragon Ball Z')
    })
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Dragon Ball Z'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox') // referencia al input

        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } }) //disparar evento input
        fireEvent.submit(form)

        // evaluar funcion de manera independiente
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        expect(input.value).toBe("")
    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form')

        fireEvent.submit(form)
        //expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()

    })
})