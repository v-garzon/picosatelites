import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { useText } from '../../context/text.context'

function EditHome() {

    const { homeError, setHomeError } = useState(null)

    const { user, pushNewContent } = useText()


    return (
        <div className='div' name='home'>
            <div className='subdiv'>
                <h2 className='h2'>Home</h2>
                <div className=''>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            page: 'HOME',
                            section: '',
                            content: '',
                            image: '',
                            user: user.username,
                            user_id: user.id
                        }}
                        onSubmit={async (values) => {
                            console.log(values)
                            const response = await pushNewContent(values)
                            console.log(response)
                        }}
                    >
                        {({ isSubmitting, handleChange, values }) => (
                            <Form className='edit-form'>
                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Chose section on the Home page:</p>
                                    <select name="section" className='edit-select' required onChange={handleChange} value={values.section}>
                                        <option value=''>Select One</option>
                                        <option value='Our Purspose' >Our Purpose</option>
                                        <option value="An Internationa Project" >An International Project</option>
                                    </select>
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Here goes the main text:</p>
                                    <textarea name="content" cols="50" rows="10" className='edit-textarea' onChange={handleChange} value={values.content} ></textarea>
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Put section image:</p>
                                    <input type="file" name="image" className='edit-input' onChange={() => {

                                    }} />
                                    {/* pass onSubmit to control submit image function */}
                                </fieldset>

                                <button disabled={isSubmitting} className='edit-button' type='submit' >
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

export default EditHome