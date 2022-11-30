import React from 'react'
import Map from '../components/maps/Map'


function About() {
    return (
        <div name='top' className='page'>
            <header className='header'>
                <h1 className='h1'>About</h1>
            </header>

            <div className='div'>
                <div className='subdiv'>
                    <p className='p'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>

            </div>
            <div className='div flex justify-center'>
                <div id='map' className='w-full subdiv h-[400px] '>
                    <Map />
                </div>
            </div>


        </div>
    )
}

export default About