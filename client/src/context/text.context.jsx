import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pullPageContentRequest, pushNewContentRequest } from "../../api/text.api";

export const textContext = createContext()

export const useText = () => {
    const context = useContext(textContext)
    if (!context) {
        throw new Error('useUser must be used within a UserContextProvider')
    }
    return context
}

export const TextContextProvider = ({ children }) => {

    const firstLoadUser = JSON.parse(localStorage.getItem('user'))
    const [user, setUser] = useState(firstLoadUser)
    const [content, setContent] = useState(null)



    const setUserInStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        console.log(JSON.parse(localStorage.getItem('user')))

    }

    const getUser = () => {
        const localUser = JSON.parse(localStorage.getItem('user'))

        if (!localUser) {
            return user
        } else {
            setUser(localUser)
            return localUser
        }
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    const pushNewContent = async (content) => {
        const response = await pushNewContentRequest(content)
        return response.data.feedback
    }

    // const pushNewImage = async (content) => {

    // }

    const pullPageContent = async ({page}) => {
        // console.log(page)
        const newContent = await pullPageContentRequest(page)
        // console.log(newContent.data)
        return newContent.data
        // setContent(newContent)
        // console.log(content)
    }



    const contentAction = () => {

    }



    return (
        <textContext.Provider value={{ user, setUserInStorage, getUser, logout, pushNewContent, pullPageContent, content }} >
            {children}
        </textContext.Provider>
    )
}