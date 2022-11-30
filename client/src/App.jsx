import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'


import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'
import OurTeam from './pages/OurTeam'
import Project from './pages/Project'

function App() {
    return (
        <div className="App">
            <Navbar />
            
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/ourteam' element={<OurTeam />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/project' element={<Project />} />
                </Routes>
            
            <Footer />
        </div>
    )
}

export default App
