import React from 'react'
import { useState } from 'react'
import { useCounter } from '../hook'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter <Small value={counter} /> </h1>
            <hr />

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
