import React, { useEffect, useState } from 'react'
import { GifGrifItem } from './GifGrifItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=jJeomsdwrOxDDkoD3YGuibtI2zlQFNZB&q=Rick+and+Morty&limit=10'
        try {
            const resp = await fetch(url)
            if (resp) {
                const { data } = await resp.json()
                const gifs = data.map(img => {
                    return {
                        id: img.id,
                        title: img.title,
                        url: img.images?.downsized_medium.url
                    }
                })
                console.log(gifs)
                setImages(gifs)
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <>
            <h3>{category}</h3>
            {
                images.map((img) => {
                    return <GifGrifItem key={img.id} img={img} ></GifGrifItem>
                })
            }
        </>
    )
}
