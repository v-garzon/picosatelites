import axios from "axios"

export const pullPageContentRequest = async (page) =>
    await axios.get(`https:vgarzoon.com/content/${page}`)

export const pullAllContentRequest = async () => {
    const result = await axios.get('https:vgarzoon.com/allcontent')   // change to 'http://localhost:4000/...' when developing
    return result
}

export const pushNewContentRequest = async (content) => {
    const result = await axios.post('https:vgarzoon.com/pushnewcontent', content)
    return result
}