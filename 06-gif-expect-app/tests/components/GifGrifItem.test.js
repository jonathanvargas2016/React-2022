import { render, screen } from '@testing-library/react'
import { GifGrifItem } from '../../src/components/GifGrifItem'

describe('Pruebas en <GIfItem>', () => {

    const title = "Saitama"
    const url = "https://one-punch.com/saitama.jpg"

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGrifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la img con el url y el alt indicado', () => {

        render(<GifGrifItem title={title} url={url} />)

        // screen: ver el componente
        // screen.debug()

        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })
    test('Debe de mostrar el titulo del documento', () => {

        render(<GifGrifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()

    })
})