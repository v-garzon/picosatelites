import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { Link as LinkScroll } from 'react-scroll'

import { useText } from '../../context/text.context'
import { useState } from 'react'
import EditHome from './EditHome'
import EditProject from './EditProject'
import EditOurTeam from './EditOurTeam'
import EditNews from './EditNews'

function Edit() {

    const { user } = useText()

    return (

        <div className='page'>
            <nav className='sticky top-[80px] w-full h-10 bg-slate-300 flex items-center justify-center'>
                <ul className='flex justify-around max-w-[1240px] w-full'>
                    <li><LinkScroll to='home' smooth={true} offset={-130} duration={500} className='cursor-pointer' >Home</LinkScroll></li>
                    <li><LinkScroll to='project' smooth={true} offset={-130} duration={500} className='cursor-pointer' >Project</LinkScroll></li>
                    <li><LinkScroll to='ourteam' smooth={true} offset={-130} duration={500} className='cursor-pointer' >Our Team</LinkScroll> </li>
                    <li><LinkScroll to='news' smooth={true} offset={-130} duration={500} className='cursor-pointer' >News</LinkScroll></li>
                    <li className='line-through'>Support</li>
                </ul>
            </nav>
            <header className='header'>
                <h1 className='h1'>EDIT PAGE</h1>
            </header>
            {!user ? <Navigate to='/auth/login' /> : (
                <>
                    <EditHome />
                    <EditProject />
                    <EditOurTeam />
                    <EditNews />
                </>
            )}


        </div>
    )



}

export default Edit