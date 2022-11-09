const API_URL = "http://localhost:3000/api/flickr"

const safeSearch = async (url, init) => {
    let response
    try {
        response = await fetch(url, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', },
            ...init
        })
    } catch (error) {
        throw new Error(error.message)
    }
    const { error, data } = await response.json()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

exports.photos = {
    search: ({ page = 1, text = "" }) => safeSearch(`${API_URL}?page=${page}&text=${decodeURIComponent(text)}`)
}