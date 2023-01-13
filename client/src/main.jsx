import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import App from './App'
import { TextContextProvider } from './context/text.context'
import './index.css'



const container = document.getElementById('root')
const root = createRoot(container)


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
