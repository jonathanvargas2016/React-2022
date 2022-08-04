import React, { useEffect, useState } from 'react'
import { GifGrifItem } from './GifGrifItem'
import { getGifs } from '../Helpers/getGifs'



export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    // getGifs() // *** PESIMA PRACTICA ***no colocar directamente una funcion en el functional component

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }


    useEffect(() => {
        getImages()
    }, []) // hook se dispara solo una vez cuando se construye este componente

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
