
// CUSTOM HOOK
// hook es una funcion que retorna algo

import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // getGifs() // *** PESIMA PRACTICA ***no colocar directamente una funcion en el functional component

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }


    useEffect(() => {
        getImages()
    }, []) // hook se dispara solo una vez cuando se construye este componente


    return {
        images,
        isLoading
    }
}
