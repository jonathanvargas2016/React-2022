import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const Quote = ({ author, quote }) => {


    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        hight: 0
    })
    useLayoutEffect(() => {
        console.log()
        const { height, width } = pRef.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [quote])

    return (
        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}>

                <p ref={pRef} className='mb-3'>{quote} </p>

                <footer className='blockquote-footer'>{author} </footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)} </code>
        </>
    )
}

Quote.propTypes = {

    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired

}
