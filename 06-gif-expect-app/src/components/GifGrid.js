import React from 'react'
import { GifGrifItem } from './GifGrifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            
            <ol className='card-grid'>
                {
                    images.map((img) => {
                        return <GifGrifItem
                            key={img.id}
                            {...img} > 

                        </GifGrifItem>
                    })
                }
            </ol>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
