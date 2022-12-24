import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest, registerRequest } from "../../api/user.api";
import { useText } from "./text.context";


export const userContext = createContext()

export const useUser = () => {
    const context = useContext(userContext)
    if (!context) {
        throw new Error('useUser must be used within a UserContextProvider')
    }
    return context
}

export function UserContextProvider({ children }) {

    const { setUserInStorage } = useText()

    const navigate = useNavigate()

    const usernameValidation = /^[a-z0-9_.]+$/
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const validateUsername = (text) => usernameValidation.test(text)
    const validateEmail = (text) => emailValidation.test(text)

    const register = async (content) => {
        try {
            if (!validateUsername(content.username, usernameValidation)) {
                return 'Enter a valid username ([a-z][A-Z][0-9][.][_])'
            } else if (content.password !== content.confPassword) {
                return 'Your passwords do not match'
            } else {
                const response = await registerRequest(content)

                if (response.data.redirect) navigate(response.data.redirect)

                if (response.data.registerError) return response.data.registerError
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const login = async (content) => {
        try {
            if (validateEmail(content.username)) {
                content.type = 'email'
                const response = await loginRequest(content)

                if (response.data.user) setUserInStorage(response.data.user)

                if (response.data.loginError) return response.data.loginError

                

            } else if (validateUsername(content.username)) {
                content.type = 'username'
                const response = await loginRequest(content)

                if (response.data.user) setUserInStorage(response.data.user) 
                
                if (response.data.loginError) return response.data.loginError

                

            } else {
                return 'Username / email not valid'
            }

        } catch (error) {
            console.log(error)
            return error
        }
    }


    return (
        <userContext.Provider value={{ register, login }}>
            {children}
        </userContext.Provider>
    )
}