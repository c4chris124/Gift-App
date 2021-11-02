export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0nmVStL3u7cJ5PhZJZ9Gj7GGM4RD1AhA`
    const res = await fetch(url);
    const { data } = await res.json()

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts
}