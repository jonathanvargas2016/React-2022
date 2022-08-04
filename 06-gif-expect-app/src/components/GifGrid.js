import React from 'react'
import { GifGrifItem } from './GifGrifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'



export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
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
