import { RouterProvider } from 'react-router-dom'

import router from './router/router'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'
import OurTeam from './pages/OurTeam'
import Project from './pages/Project'

import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'

import UserContextLayout from './context/layout/user.context.layout'
import Edit from './pages/edit/Edit'


function App() {
    return (
        <div className="App">            
            <RouterProvider router={router} />
        </div>
    )
}

export default App
