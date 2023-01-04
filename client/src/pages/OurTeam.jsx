import React, { useEffect, useState } from 'react'
import ScrollToTopOnMount from '../components/ScrollTo/ScrollToTopOnMount'
import { useText } from '../context/text.context'

function OurTeam() {

    const { pullPageContent } = useText()

    const [content, setContent] = useState(null)
    const [members, setmembers] = useState(null)

    const groupsNames = ["Professors", "1st Mission's Team", "2nd Mission's Team", "Social Media Team", "Coordinators"]
    const groups = ['professors', 'firstMission', 'secondMission', 'RRSS', 'coordinators']

    const writeDownContent = () => {
        console.log(content)
        let professors = []
        let firstMission = []
        let secondMission = []
        let RRSS = []
        let coordinators = []
        for (let member in content) {
            if (member !== 'page') {
                console.log(member)
                switch (content[member].team) {

                    case '1st mission':
                        firstMission.push(content[member])
                        break

                    case '2nd mission':
                        secondMission.push(content[member])
                        break

                    case 'Professor':
                        professors.push(content[member])
                        break

                    case 'RR.SS':
                        RRSS.push(content[member])
                        break

                    case 'Organizers':
                        coordinators.push(content[member])
                        break
                }



            }
        }
        setmembers({
            professors,
            firstMission,
            secondMission,
            RRSS,
            coordinators
        })

    }

    const getContent = async () => {
        var response = await pullPageContent({ page: 'OURTEAM' })
        // console.log(response)
        setContent(response)
    }

    // if (content) writeDownContent()

    useEffect(() => {
        if (!content) getContent()
        if (content && !members) writeDownContent()
        console.log(members)
    })

    return (
        <div name='top' className='page'>
            <ScrollToTopOnMount />
            <header className='header'>
                <h1 className='h1'>Our Team</h1>
            </header>
            {
                groups.map((group, index) => (

                    <div key={group} className='div'>
                        <div className='subdiv w-full'>
                            <h2 className='h2'>{groupsNames[index]}</h2>
                            <div className='w-full flex flex-col items-center'>

                                {
                                    !members ?
                                        '' :
                                        members[group].length === 0 ?
                                            (
                                                <div className='w-full flex flex-col sm:grid sm:grid-cols-3 gap-x-20 gap-y-10'>
                                                    <picture className='h-full w-full flex justify-center items-center'>
                                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-jpg-1611257349.jpg?crop=1xw:0.90390625xh;center,top&resize=480:*"
                                                            alt="Ramon y Cajal image"
                                                            className='object-scale-down h-[300px]'
                                                        />
                                                    </picture>
                                                    <div className='col-span-2 flex flex-col gap-y-3 md:p-5'>
                                                        <h3 className='text-2xl uppercase ml-5'>Ramon y Cajal</h3>
                                                        <p className='p'>
                                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                        </p>
                                                        <div className='mt-2'>
                                                            <h4 className='text-xl'>Major contributions</h4>
                                                            <ul className='list-disc ml-6'>
                                                                <li>Social networks</li>
                                                                <li>Orbital calculus</li>
                                                                <li>3D design</li>
                                                            </ul>
                                                        </div>
                                                        <div className='h-full flex items-end'>
                                                            Contact: @instagram & @mail
                                                        </div>
                                                    </div>
                                                </div>
                                            ) :
                                            members[group].map(member => (
                                                <div key={member.name} className='w-full flex flex-col sm:grid sm:grid-cols-3 gap-x-20 gap-y-10'>
                                                    <picture className='h-full w-full flex justify-center items-center'>
                                                        <img
                                                            alt="Member image"
                                                            className='object-scale-down h-[300px] border border-black w-[240px]'
                                                        />
                                                    </picture>
                                                    <div className='col-span-2 flex flex-col gap-y-3 md:p-5'>
                                                        <h3 className='text-2xl uppercase ml-5'>{member.name}</h3>
                                                        <p className='p'>
                                                            {member.description}
                                                        </p>
                                                        <div className='mt-2'>
                                                            <h4 className='text-xl'>Major contributions</h4>
                                                            <ul className='list-disc ml-6'>
                                                                {JSON.parse(member.major_contributions).map((mjc, index) => (
                                                                    <li key={`${index}_${mjc}`}>{mjc}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className='h-full flex items-end'>
                                                            Contact: {member.contact}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                }



                            </div>
                        </div>
                    </div>

                ))
            }


        </div >

    )
}

export default OurTeam