import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useScrollLock } from '../hooks/ScrollLock'
import { useText } from '../context/text.context'

function Navbar() {

    const { user, logout } = useText()

    const navigate = useNavigate()

    const [hasFocus, setFocus] = useState(false)
    const { lockScroll, unlockScroll } = useScrollLock()
    const handleClick = () => setFocus(!hasFocus)

    if (hasFocus) {
        lockScroll()
    } else {
        unlockScroll()
    }


    return (
        <div id='navbar' className='w-screen h-[80px] z-10 sticky top-0 drop-shadow-xl bg-transparent drop-shadow-lg bg-white'>
            <div className='px-2 sm:px-10 flex justify-between z-10 items-center h-full'>
                <h1 className='flex text-3xl sm:text-4xl font-bold'><Link to='/'>BRAND.</Link></h1>

                <ul className='hidden md:flex justify-between gap-10 text-lg'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/project'>(Project Name)</Link></li>
                    <li><Link to='/ourteam'>Our Team</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/support'>About</Link></li>
                    {!user ? "" :
                        <>
                            <li><Link to='/edit'>Edit</Link></li>
                            <button onClick={() => {
                                navigate('/')
                                logout()
                            }}>Logout</button>
                        </>
                    }
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
                <li className='border-b-2 border-zinc-300 w-full p-4'>           <Link className='w-full' to='/support' onClick={handleClick}>About</Link></li>
                {!user ? "" :
                    <>
                        <li className='border-b-2 border-zinc-300 w-full p-4'><Link className='w-full' to='/edit'>Edit</Link></li>
                        <button className='border-b-2 border-zinc-300 w-full p-4' onClick={() => {
                            navigate('/')
                            logout()
                        }}>Logout</button>
                    </>
                }

            </ul>

        </div >
    )
}

export default Navbar