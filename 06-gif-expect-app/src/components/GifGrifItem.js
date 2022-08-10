import React from 'react'
import PropTypes from 'prop-types'

export const GifGrifItem = ({title, url}) => {
    return (
        <li className='card'>
            <img src={url} alt={title} />
            <p>{title} </p>
        </li>
    )
}

GifGrifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}