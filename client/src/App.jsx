import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'


import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pagess/About'
import Home from './pagess/Home'
import News from './pagess/News'
import OurTeam from './pagess/OurTeam'
import Project from './pagess/Project'

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
