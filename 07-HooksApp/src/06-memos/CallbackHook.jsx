import { useState,useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        () => {
            setCounter(value => (value + 1))
        },
        [],
    )

// se llama cada que cambia la funcion
    useEffect(() => {
      // incrementFather()
    }, [incrementFather])
    
    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
