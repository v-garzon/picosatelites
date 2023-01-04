import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useText } from '../../context/text.context'

const EditOurTeam = () => {

    const { user, pushNewContent } = useText()

    return (
        <div className='div' name='ourteam'>
            <div className='subdiv'>
                <h2 className='h2'>Our Team</h2>
                <div className=''>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            page: 'OURTEAM',
                            name: '',
                            team: '',
                            description: '',
                            major_contributions: '',
                            contact: '',
                            image: '',
                            leader: 'false',
                            user: user.username,
                            user_id: user.id
                        }}
                        onSubmit={async (values) => {

                            

                            const response = await pushNewContent(values)
                        }}
                    >
                        {({ isSubmitting, handleChange, values }) => (
                            <Form className='edit-form'>
                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Write down your name: </p>
                                    <input type="text" name="name" className='edit-input uppercase' required onChange={handleChange} value={values.name} />
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Select your team:</p>
                                    <select name='team' className='edit-select' required onChange={handleChange} value={values.team}>
                                        <option value=''>Select One</option>
                                        <option value='Professor'>Professor</option>
                                        <option value='1st mission'>1st mission</option>
                                        <option value='2nd mission'>2nd mission</option>
                                        <option value='RR.SS'>RR.SS</option>
                                        <option value='Organizers'>Organizers</option>
                                    </select>
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Write some lines about you here:</p>
                                    <textarea name="description" cols="50" rows="10" className='edit-textarea' required onChange={handleChange} value={values.description}></textarea>
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Write your major contributions to the project:</p>
                                    <input type="text" name="major_contributions" className='edit-input' placeholder='Write them separated by commas (" , ")' required onChange={handleChange} value={values.major_contributions} />
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Provide some way of reaching to you for the public (only if you want):</p>
                                    <input type="text" name="contact" className='edit-input' placeholder='email, facebook, twitter, instagram' onChange={handleChange} value={values.contact} />
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Put section image:</p>
                                    <input type="file" name="image" className='edit-input' onChange={handleChange} value={values.image} />
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Select if you are a team leader:</p>
                                    <div className='w-full flex justify-around' >
                                        <label>
                                            <Field type='radio' name='leader' className='mx-3' value='true' />
                                            I'm a leader
                                        </label>
                                        <label>
                                            <Field type='radio' name='leader' className='mx-3' value='false' />
                                            I'm not a leader
                                        </label>
                                    </div>

                                </fieldset>

                                <button disabled={isSubmitting} type='submit' className='edit-button'>
                                    {isSubmitting ? 'Saving...' : 'Save'}
                                </button>

                            </Form>

                        )}
                    </Formik>
                </div>
            </div>

        </div>
    )
}

export default EditOurTeam