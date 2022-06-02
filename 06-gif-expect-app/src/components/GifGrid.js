import React from 'react'

export const GifGrid = ({category}) => {
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=jJeomsdwrOxDDkoD3YGuibtI2zlQFNZB&q=Rick+and+Morty&limit=10'
        
        try{
            const resp = await fetch(url)
            if(resp){
                const {data} = await resp.json()
                const gifs = data.map(img => {
                    return {
                        id: img.id,
                        title: img.title,
                        url: img.images?.downsized_medium.url
                    }
                })
                console.log(gifs)
            }
        }catch(e){
            console.log(e.message)
        }
    }
    getGifs()
  return (
    <>
        <h3>{category}</h3>
    </>
  )
}
