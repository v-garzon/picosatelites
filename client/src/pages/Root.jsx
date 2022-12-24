import { Outlet } from 'react-router-dom'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Root() {
    return (
        <>
            <Navbar />
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Root