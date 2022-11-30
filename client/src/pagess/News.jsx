import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import interviewRadiogava from '../assets/interview-radiogava (mp3cut.net).mp3'
import ScrollToTopOnMount from '../components/ScrollTo/ScrollToTopOnMount'

function News() {
    return (
        <div name='top' className='page' 
        style={{ minHeight: 'calc(100vh - 80px)' }}
        >
            <ScrollToTopOnMount />
            <header className='header'>
                <h1 className='h1'>News</h1>
            </header>

            <div className='div'>
                <div className='subdiv w-full '>
                    <div className='news-grid md:grid grid-cols-25 gap-5 w-full '>
                        <div className='col-span-12 subdiv overflow-y-scroll h-[600px]'>
                            <header className='w-full sticky top-0 flex p-0 justify-center bg-white'>
                                <h2 className='h2 mb-5'>Press</h2>
                            </header>

                            <ul className='w-full '>

                                <li className='w-full border-b border-slate-500 p-5 flex flex-col gap-y-4'>
                                    <div className='flex flex-col gap-y-1'>
                                        <a href="https://www.radiogava.cat/embed/podcast?id=radiogava_podcast_8522&mid=radiogava_podcast_8522_podcastmarker_3"
                                            target='_blank'>
                                            <h3 className='text-2xl'>
                                                RadioGavà
                                            </h3>
                                            <p className='text-sm text-neutral-700'>Our team was interviewed by the local radio of Gavà</p>
                                        </a>
                                    </div>
                                    <div className='w-full p-2 flex justify-center sm:justify-start'>
                                        <ReactAudioPlayer
                                            src={interviewRadiogava}
                                            controls
                                            
                                        />
                                    </div>
                                    <footer className='w-full flex justify-end'>
                                        <p className='text-sm text-slate-500 font-semibold'>00 / 11 / 2022</p>
                                    </footer>
                                </li>

                                <li className='w-full border-b border-slate-500 p-5 flex flex-col gap-y-4'>
                                    <div className='flex flex-col gap-y-1'>
                                        <a href="https://www.radiogava.cat/embed/podcast?id=radiogava_podcast_8522&mid=radiogava_podcast_8522_podcastmarker_3"
                                            target='_blank'>
                                            <h3 className='text-2xl'>
                                                RadioGavà
                                            </h3>
                                            <p className='text-sm text-neutral-700'>Our team was interviewed by the local radio of Gavà</p>
                                        </a>
                                    </div>
                                    <div className='w-full p-2 flex justify-center sm:justify-start'>
                                        <ReactAudioPlayer
                                            src={interviewRadiogava}
                                            controls
                                            
                                        />
                                    </div>
                                    <footer className='w-full flex justify-end'>
                                        <p className='text-sm text-slate-500 font-semibold'>00 / 11 / 2022</p>
                                    </footer>
                                </li>

                                <li className='w-full border-b border-slate-500 p-5 flex flex-col gap-y-4'>
                                    <div className='flex flex-col gap-y-1'>
                                        <a href="https://www.radiogava.cat/embed/podcast?id=radiogava_podcast_8522&mid=radiogava_podcast_8522_podcastmarker_3"
                                            target='_blank'>
                                            <h3 className='text-2xl'>
                                                RadioGavà
                                            </h3>
                                            <p className='text-sm text-neutral-700'>Our team was interviewed by the local radio of Gavà</p>
                                        </a>
                                    </div>
                                    <div className='w-full p-2 flex justify-center sm:justify-start'>
                                        <ReactAudioPlayer
                                            src={interviewRadiogava}
                                            controls
                                        />
                                    </div>
                                    <footer className='w-full flex justify-end'>
                                        <p className='text-sm text-slate-500 font-semibold'>00 / 11 / 2022</p>
                                    </footer>
                                </li>

                                <li className='w-full border-b border-slate-500 p-5 flex flex-col gap-y-4'>
                                    <div className='flex flex-col gap-y-1'>
                                        <a href="https://www.radiogava.cat/embed/podcast?id=radiogava_podcast_8522&mid=radiogava_podcast_8522_podcastmarker_3"
                                            target='_blank'>
                                            <h3 className='text-2xl'>
                                                RadioGavà
                                            </h3>
                                            <p className='text-sm text-neutral-700'>Our team was interviewed by the local radio of Gavà</p>
                                        </a>
                                    </div>
                                    <div className='w-full p-2 flex justify-center sm:justify-start'>
                                        <ReactAudioPlayer
                                            src={interviewRadiogava}
                                            controls
                                        />
                                    </div>
                                    <footer className='w-full flex justify-end'>
                                        <p className='text-sm text-slate-500 font-semibold'>00 / 11 / 2022</p>
                                    </footer>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden md:flex justify-center h-[600px]'>
                            <div className='h-full w-[2px] bg-slate-500 left-[50%] '></div>
                        </div>

                        <div className='col-span-12 subdiv overflow-y-scroll mt-20 md:mt-0'>
                            <h2 className='h2 sticky top-0'>Our Progress</h2>

                            {/* FOR OUR PROGRESSES (max: 3)*/}
                            <div>
                                <picture></picture>
                                <div>
                                    <h3>
                                        {/* anchor to news */}
                                        <a>(title)</a>
                                    </h3>
                                    <p>(subtitle)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default News