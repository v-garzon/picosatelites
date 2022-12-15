import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useScrollLock } from '../hooks/ScrollLock'

function Navbar() {

    const [hasFocus, setFocus] = useState(false)
    const { lockScroll, unlockScroll } = useScrollLock()
    const handleClick = () => setFocus(!hasFocus)

    if (hasFocus) {
        lockScroll()
    } else {
        unlockScroll()
    }

    useEffect(() => {

    })
    return (
        <div id='navbar' className='w-screen h-[80px] z-10 sticky top-0 drop-shadow-xl bg-transparent'>
            <div className='px-2 sm:px-10 flex justify-between z-10 items-center h-full'>
                <h1 className='flex text-3xl sm:text-4xl font-bold'><Link to='/'>BRAND.</Link></h1>

                <ul className='hidden md:flex justify-between gap-10 text-lg'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/project'>(Project Name)</Link></li>
                    <li><Link to='/ourteam'>Our Team</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>

                <button id='button' className='md:hidden mr-4'
                    onClick={handleClick}
                >
                    {!hasFocus ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
                </button>
            </div>

            <ul className={(!hasFocus ? 'hidden' : 'absolute bg-white w-full px-8')} style={{ transitionDuration: '400ms' }}>
                <li className='border-b-2 border-zinc-300 w-full p-4'><Link className='w-full' to='/' onClick={handleClick}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full p-4'><Link className='w-full' to='/project' onClick={handleClick}>(Project Name)</Link></li>
                <li className='border-b-2 border-zinc-300 w-full p-4'><Link className='w-full' to='/ourteam' onClick={handleClick}>Our Team</Link></li>
                <li className='border-b-2 border-zinc-300 w-full p-4'><Link className='w-full' to='/news' onClick={handleClick}>News</Link></li>
                <li className='border-zinc-300 w-full p-4'>           <Link to='/about' onClick={handleClick}>About</Link></li>

            </ul>

        </div >
    )
}

export default Navbar