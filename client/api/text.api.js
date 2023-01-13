import axios from "axios"

export const pullPageContentRequest = async (page) =>
    await axios.get(`http://82.223.67.37:4000/content/${page}`)

export const pullAllContentRequest = async () => {
    const result = await axios.get('http://82.223.67.37:4000/allcontent')   // change to 'http://localhost:4000/...' when developing
    return result
}

export const pushNewContentRequest = async (content) => {
    const result = await axios.post('http://82.223.67.37:4000/pushnewcontent', content)
    return result
}