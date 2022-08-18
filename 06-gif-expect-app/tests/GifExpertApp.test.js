import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    test('Deberia de mostrar la categoria por defecto', () => {

        render(<GifExpertApp />)
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1)

    })

    test('Debe de mostrar una nueva categoria al hacer submit', () => {

        const newCategory = "Rick and Mortin"

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form)
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)

    })

    test('No Debe de mostrar categorias repetidas', () => {

        const newCategory = "Dragon Ball"

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form)
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1)

    })
})