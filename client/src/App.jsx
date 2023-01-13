import { BrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'

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
import { TextContextProvider } from './context/text.context'


function App() {
    return (
        <div className="App">
            <TextContextProvider>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/support' element={<About />} />
                    <Route path='/ourteam' element={<OurTeam />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/project' element={<Project />} />

                    <Route element={<UserContextLayout />}>
                        <Route path='/auth/signup' element={<SignUp />} />
                        <Route path='/auth/login' element={<Login />} />
                    </Route>

                    <Route path='/edit' element={<Edit />} />
                </Routes>

                <Footer />
            </TextContextProvider>
            {/* <RouterProvider router={router} /> */}
        </div>
    )
}

export default App
