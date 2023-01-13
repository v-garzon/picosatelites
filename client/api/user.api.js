import axios from "axios"


export const registerRequest = async (content) => 
    await axios.post('https://vgarzoon.com/register', content)
    



export const  loginRequest = async (content) => 
    await axios.post('https://vgarzoon.com/login', content)
