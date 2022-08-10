import { render } from '@testing-library/react'
import { GifGrifItem } from '../../src/components/GifGrifItem'

describe('Pruebas en <GIfItem>', () => {

    test('debe de hacer match con el snapshot', () => {
        render(<GifGrifItem />)
    })
})