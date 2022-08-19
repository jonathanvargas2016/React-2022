import { useFetchGifs } from '../../src/hooks/useFetchGifs'
import { renderHook, waitFor } from '@testing-library/react'

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Debe de retornar un arreglo de images y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 6000
            }
        )

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })

})