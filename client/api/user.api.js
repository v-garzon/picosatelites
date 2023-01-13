import axios from "axios"


export const registerRequest = async (content) => 
    await axios.post('http://82.223.67.37:4000/register', content)
    



export const  loginRequest = async (content) => 
    await axios.post('http://82.223.67.37:4000/login', content)
