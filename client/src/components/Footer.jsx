import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import { FaFacebook, FaGithub, FaTwitch, FaTwitter, FaInstagram } from 'react-icons/fa'
import { ArrowUturnUpIcon } from '@heroicons/react/24/outline'

function Footer() {
    return (
        <footer className='w-screene bg-slate-900 text-slate-50 flex flex-col items-center pt-20 font-light text-sm px-5'>
            <div className='max-w-[1240px]'>
                <div className='grid sm:grid-cols-2 md:grid-cols-5 pb-10 border-b border-slate-500 '>
                    <div className=' sm:col-span-2 md:col-span-1'>
                        <h1 className='text-2xl font-semibold text-center  md:mr-[10%]'>
                            BRAND.
                        </h1>
                    </div>
                    <div>
                        <h3>
                            support
                        </h3>
                        <div className='divspan'>
                            <span className=' text-slate-100'>·</span>
                            <span className=' text-slate-400'>·</span>
                            <span className=' text-slate-700'>·</span>
                        </div>
                        <ul>
                            <li>
                                FAQ
                            </li>
                            <li>
                                Donate
                            </li>
                            <li>
                                Give advice
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            learn
                        </h3>
                        <div className='divspan'>
                            <span className=' text-slate-100'>·</span>
                            <span className=' text-slate-400'>·</span>
                            <span className=' text-slate-700'>·</span>
                        </div>
                        <ul>
                            <li>(proyecto a lo grande)</li>
                            <li>Techniques</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            connect
                        </h3>
                        <div className='divspan'>
                            <span className=' text-slate-100'>·</span>
                            <span className=' text-slate-400'>·</span>
                            <span className=' text-slate-700'>·</span>
                        </div>
                        <ul>
                            <li>About (Group name)</li>
                            <li>Contact</li>
                            <li>Av. de les Bòbiles, 1, 08850 Gavà, Barcelona</li>
                            <li>(@ or tel)</li>
                            <li className='font-bold'><Link to='/edit'>EDIT PAGE</Link></li>
                            

                        </ul>
                    </div>
                    <div>
                        <h3>
                            Subscribe to our newsletter
                        </h3>
                        <div className='divspan'>
                            <span className=' text-slate-100'>·</span>
                            <span className=' text-slate-400'>·</span>
                            <span className=' text-slate-700'>·</span>
                        </div>
                        <p className='py-2 mx-20 sm:mx-10 md:mx-0'>
                            {/* The latest news, articles, and resources, sent to your inbox monthly. */}
                            Receive monthly feedback and stay tunned !!!
                        </p>
                        <form action="" className='flex flex-col mx-10 md:mx-0'>
                            <input type="email" placeholder='Enter your email' className='w-full px-4 py-2 my-2  text-sm text-slate-900 ' />
                            <button type='submit' className='button-dark w-full uppercase py-2'>
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
                <div className='flex flex-col sm:grid sm:grid-cols-3 w-full py-6 items-center'>
                    <div className='text-slate-500 text-sm '>
                        <p>&copy;  2022 COPYRIGHT - BRAND. <br className='hidden sm:block' /> ALL RIGHTS RESERVED</p>
                    </div>

                    <div className='w-full hidden sm:flex justify-center items-center text-slate-500'>
                        <LinkScroll to='top' smooth={true} offset={-500} duration={500} className='flex border border-slate-500 px-4 py-2 cursor-pointer'>
                            <p className='uppercase'>Return to top</p>
                            <ArrowUturnUpIcon className='w-4 ml-2' />
                        </LinkScroll>
                    </div>

                    <div className='flex justify-between sm:pl-20 w-full pt-6 sm:pt-0 text-2xl text-slate-500'>
                        <FaFacebook />
                        <FaGithub />
                        <FaTwitch />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer