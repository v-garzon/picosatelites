import React from 'react'
import ScrollToTopOnMount from '../components/ScrollTo/ScrollToTopOnMount'

function Project() {
    return (
        <div name='top' className='page'>
            <ScrollToTopOnMount />
            <header className='header'>
                <h1 className='h1'>Project Name</h1>
            </header>

            <div className='div'>
                <div className='subdiv'>
                    <h2 className='h2'>Objectives</h2>
                    <div>
                        <p className='p'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>

            </div>
            <div className='div'>
                <div className="subdiv">
                    <h2 className='h2'>Hardware & Architecture</h2>
                    <div>
                        <p className='p'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div>
                        <button className='transition-button-project button-project button-hardware'>
                            Watch our sat in Augmented Reality
                        </button>
                    </div>
                </div>
            </div>

            <div className='div'>
                <div className="subdiv">
                    <h2 className='h2'>Software</h2>
                    <div>
                        <p className='p'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div>
                        <button className='transition-button-project button-project button-software'>
                            See our code!
                        </button>
                    </div>

                </div>
            </div>
            <div className='div'>
                <div className="subdiv">
                    <h2 className='h2'>Ground Station</h2>
                    <div>
                        <p className='p'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>

            </div>
            <div className='div'>
                <div className="subdiv w-full">
                    <h2 className='h2'>The Docs</h2>
                    <div className='grid sm:grid-cols-2 gap-20 w-full'>
                        <picture>
                            <div className='w-full h-full border border-black'>
                                (here goes an image)
                            </div>
                        </picture>
                        <div className='flex flex-col gap-y-5 py-5 justify-center'>
                            <button className='transition-button-project button-project button-hardware'>Download 3d docs <br /> <span className='text-sm font-light'>.3dm</span></button>
                            <button className='transition-button-project button-project button-software'>Download code <br /> <span className='text-sm font-light'>.zip</span></button>
                            <button className='transition-button-project button-project button-software'>Visit our docs page for more software info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project