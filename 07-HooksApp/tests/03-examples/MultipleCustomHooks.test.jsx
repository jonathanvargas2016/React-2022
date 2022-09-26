import { MultipleCustomHooks } from "../../src/03-examples"
import { fireEvent, render, screen } from '@testing-library/react'
import { useFetch } from "../../src/hook/useFetch"
import { useCounter } from "../../src/hook/useCounter"

jest.mock('../../src/hook/useFetch') //mock completo de todo esta libreria
jest.mock('../../src/hook/useCounter')

describe('Pruebas en <MultipleCustomHooks>', () => {

    //*comentario: simula una funcion. 
    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    })

    //*comentario: limpia cada prueba
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        //*comentario: probar el componente
        render(<MultipleCustomHooks></MultipleCustomHooks>)
        screen.debug()

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Breaking Bad Quotes'))
        const nextButton = screen.getByRole('button')
        expect(nextButton.disabled).toBeTruthy()
    })

    test('debe de mostrar un Quote', () => {

        //*comentrio: valor de retorno de un custom hook
        useFetch.mockReturnValue({
            data: [{ author: 'Jonathan', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>)
        screen.debug()

        expect(screen.getByText('Hola Mundo')).toBeTruthy()
        expect(screen.getByText('Jonathan')).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect(nextButton.disabled).toBeFalsy()
    })

    test('debe de llamar a la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Jonathan', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>)
        const nextButton = screen.getByRole('button', { name: 'Next quote' })

        //*comentario: evento click en boton
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled()

    })


})