import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { Link as LinkScroll } from 'react-scroll'

import { useText } from '../../context/text.context'
import { useState } from 'react'
import EditHome from './EditHome'

function Edit() {

    const { user } = useText()
    const navigate = useNavigate()


    console.log(user)
    // useEffect(() => {
    //     if (!user) navigate('/auth/login')
    // }, [user])

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

                    <div className='div' name='project'>
                        <div className='subdiv'>
                            <h2 className='h2'>Project</h2>
                            <div className=''>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{

                                    }}
                                    onSubmit={() => { }}
                                >
                                    {({ isSubmitting, handleChange, values }) => (
                                        <Form className='edit-form'>
                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Chose section on the Home page:</p>
                                                <select name="section" className='edit-select'>
                                                    <option value='Objectives' >Objectives</option>
                                                    <option value="Hardware" >Hardware</option>
                                                    <option value='Software' >Software</option>
                                                    <option value='Ground Station' >Ground Station</option>
                                                </select>
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Here goes the main text:</p>
                                                <textarea name="content" cols="50" rows="10" className='edit-textarea'></textarea>
                                            </fieldset>

                                            <button disabled={isSubmitting} className='edit-button'>
                                                {isSubmitting ? 'Saving...' : 'Save'}
                                            </button>

                                        </Form>

                                    )}
                                </Formik>
                            </div>
                        </div>

                    </div>

                    <div className='div' name='ourteam'>
                        <div className='subdiv'>
                            <h2 className='h2'>Our Team</h2>
                            <div className=''>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{

                                    }}
                                    onSubmit={() => { }}
                                >
                                    {({ isSubmitting, handleChange, values }) => (
                                        <Form className='edit-form'>
                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write down your name: </p>
                                                <input type="text" name="name" className='edit-input' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Select your team:</p>
                                                <select name='team' className='edit-select'>
                                                    <option value='Professor'>Professor</option>
                                                    <option value='1st mission'>1st mission</option>
                                                    <option value='2nd mission'>2nd mission</option>
                                                    <option value='RR.SS'>RR.SS</option>
                                                    <option value='Organizers'>Organizers</option>
                                                </select>
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write some lines about you here:</p>
                                                <textarea name="description" cols="50" rows="10" className='edit-textarea'></textarea>
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write your major contributions to the project:</p>
                                                <input type="text" name="major_contributions" className='edit-input' placeholder='Write them separated by dollar symbols $' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Provide some way of reaching to you for the public (only if you want):</p>
                                                <input type="text" name="contact" className='edit-input' placeholder='email, facebook, twitter, instagram' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Put section image:</p>
                                                <input type="file" name="image" className='edit-input' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Put section image:</p>
                                                <div className='w-full flex justify-around'>
                                                    <div>
                                                        <input type="radio" name="leader" id='leader0' className='mx-3' value={true} />
                                                        <label htmlFor="leader0">I'm a leader</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" name="leader" id='leader1' className='mx-3' value={false} />
                                                        <label htmlFor="leader1">I'm not a leader</label>
                                                    </div>

                                                </div>

                                            </fieldset>

                                            <button disabled={isSubmitting} className='edit-button'>
                                                {isSubmitting ? 'Saving...' : 'Save'}
                                            </button>

                                        </Form>

                                    )}
                                </Formik>
                            </div>
                        </div>

                    </div>

                    <div className='div' name='news'>
                        <div className='subdiv'>
                            <h2 className='h2'>News</h2>
                            <div className=''>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{

                                    }}
                                    onSubmit={() => { }}
                                >
                                    {({ isSubmitting, handleChange, values }) => (
                                        <Form className='edit-form'>
                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write down the newspaper / channel / radio / etc:</p>
                                                <input type="text" name="title" className='edit-input' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write down a little description:</p>
                                                <input type="text" name="subtitle" className='edit-input' />
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Select the body type:</p>
                                                <select name='source_type' className='edit-select'>
                                                    <option value='Video'>Video</option>
                                                    <option value='Audio'>Audio</option>
                                                    <option value='Image'>Image</option>
                                                    <option value='Plain text'>Plain text</option>
                                                </select>
                                            </fieldset>

                                            <fieldset className='edit-fieldset'>
                                                <p className='edit-label'>Write down the body text / Select the file you want to push:</p>
                                                <textarea name="body-text" cols="50" rows="3" className='edit-textarea min-h-[100px]'></textarea>
                                                <p></p>
                                                <input name='source' type='file' className='edit-input mt-4' />
                                            </fieldset>

                                            <button disabled={isSubmitting} className='edit-button'>
                                                {isSubmitting ? 'Adding...' : 'Add'}
                                            </button>

                                        </Form>

                                    )}
                                </Formik>
                            </div>
                        </div>

                    </div>
                </>
            )}


        </div>
    )



}

export default Edit