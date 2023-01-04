import axios from "axios"

export const pullPageContentRequest = async (page) =>
    await axios.get(`http://localhost:4000/content/${page}`)

export const pullAllContentRequest = async () => {
    const result = await axios.get('http://localhost:4000/allcontent')
    return result
}

export const pushNewContentRequest = async (content) => {
    const result = await axios.post('http://localhost:4000/pushnewcontent', content)
    return result
}