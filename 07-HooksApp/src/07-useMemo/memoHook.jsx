import React, { memo } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useCounter } from '../hook'

const heavyStuff = (iterationNumber = 100) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi vamos... ')

    }
    return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(true)


    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) // memoriza un valor

    return (
        <>
            <h1>Counter {counter} </h1>
            <hr />

            <h4>{memorizedValue} </h4>

            <button className='btn btn-primary'
                type='button'
                onClick={() => increment()}>
                Add +1
            </button>

            <button className='btn btn-success'
                style={{ marginLeft: '10px' }}
                type='button' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
