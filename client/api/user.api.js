import axios from "axios"


export const registerRequest = async (content) => 
    await axios.post('http://localhost:4000/register', content)
    



export const  loginRequest = async (content) => 
    await axios.post('http://localhost:4000/login', content)
