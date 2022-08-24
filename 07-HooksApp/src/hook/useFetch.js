import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setSate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setSate({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        setSate({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {

        getFetch()
        return () => {

        }
    }, [url])// si el url cambia se dispara



    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
