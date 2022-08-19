import React from 'react'
import { useCounter } from '../hook/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()

    return (
        <>
            <h1>Counter with hook: {counter} </h1>
            <hr />

            <div style={{ width: '300px', display: 'flex', justifyContent: 'space-evenly' }}>
                {/* <button className='btn btn-primary' onClick={(event es el evento click) => increment(event)}>Add +1</button> */}
                <button className='btn btn-primary' onClick={() => increment(2)}>Add +1</button>
                <button className='btn btn-secondary' onClick={reset}>Reset</button>
                <button className='btn btn-danger' onClick={() => decrement(2)}>-1</button>
            </div>
        </>
    )
}
