import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

import bgVideo from "../assets/space-video.mp4";

import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
import ScrollToTopOnMount from '../components/ScrollTo/ScrollToTopOnMount'
import { useText } from '../context/text.context'

function Home() {
    const videoEl = useRef(null)

    const { pullPageContent } = useText()

    const [content, setContent] = useState(null)


    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    const getContent = async () => {
            var response = await pullPageContent({ page: 'HOME' })
            // console.log(response)
            setContent(response)
    }

    useEffect(() => {
        attemptPlay()
        if (!content) getContent()
        // console.log(content)

    }, [])


    return (
        <div name='top' className='page'>
            <ScrollToTopOnMount />

            <div className='text-white flex justify-center mb-[7rem]'>
                <div className='w-full h-screen overflow-hidden absolute bg-transparent' style={{ height: 'calc(100vh - 80px)' }}>
                    <video
                        id='video'
                        className='bg-blend-overlay h-full object-cover w-full bg-black'
                        playsInline
                        loop
                        muted
                        autoPlay
                        // controls
                        preload='metadata'
                        alt=''
                        src={bgVideo}
                        type='video/mp4' />
                </div>

                <div
                    className="max-w-[1240px] w-full mx-5"
                    style={{ height: "calc(100vh - 80px)" }}
                >
                    <div className="grid md:grid-cols-2 h-full w-full relative">
                        <div className="flex flex-col justify-center w-full h-full">
                            <h1 className="mt-[-8rem] sm:mt-[7rem] text-4xl md:text-5xl lg:text-6xl font-bold uppercase w-full">
                                Let's connect <br />
                                through Space
                            </h1>

                            <Link to="learn-more" smooth={true} offset={-150} duration={500} className=''>
                                <button className=" button-dark hidden sm:block mt-5 w-fit py-4 px-8 text-2xl">
                                    Learn More
                                </button>
                            </Link>

                            <Link
                                to="learn-more"
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className=""
                            >
                                <button
                                    className="
                absolute bottom-[60px]
                sm:hidden w-full flex flex-col-reverse items-center text-slate-600 text-2xl"
                                >
                                    Learn More
                                    <ChevronDoubleUpIcon className="w-10" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div name='learn-more' className='div' >
                <div className='subdiv'>

                    <h2 className='h2'>Our Purpose</h2>

                    <div className='subsubdiv grid-cols-5 gap-5'>
                        <picture className='picture col-span-2' id='1-image'>
                            ( here goes an image )
                        </picture>
                        <div className='col-span-3 md:px-10 py-5'>
                            <p className='p' id='1-text'>
                                {
                                    !content || !content['OurPurspose']
                                        ? '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                                        : content['Our Purspose'].content
                                }
                            </p>
                        </div>

                    </div>
                </div>
            </div>



            <div className='div' >
                <div className='subdiv'>
                    <h2 className='h2'>An internacional project</h2>
                    <div className='subsubdiv grid-cols-9' >
                        <div className='col-span-5 px-10 py-5'>
                            <p className='p' id='2-text'>
                                {
                                    !content || !content['OurPurspose']
                                        ? '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                                        : content['An Internationa Project'].content
                                }
                            </p>
                        </div>
                        <picture className='col-span-4 picture' id='2-image'>
                            ( here goes an image )
                        </picture>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Home;
