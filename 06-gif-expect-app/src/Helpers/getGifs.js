export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jJeomsdwrOxDDkoD3YGuibtI2zlQFNZB&q=${category}&limit=10`
    try {
        const resp = await fetch(url)
        if (resp) {
            const { data } = await resp.json()
            const gifs = data.map(img => (
                {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            ))
            return gifs
        }
    } catch (e) {
        console.log(e.message)
    }
}