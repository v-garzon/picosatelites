import React from 'react'
import { Form, Formik } from 'formik'
import { useText } from '../../context/text.context'

const EditProject = () => {

    const { user, pushNewContent } = useText()

    return (
        <div className='div' name='project'>
            <div className='subdiv'>
                <h2 className='h2'>Project</h2>
                <div className=''>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            page: 'PROJECT',
                            section: '',
                            content: '',
                            user: user.username,
                            user_id: user.id
                        }}
                        onSubmit={async (values) => {
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
                                        <option value='Objectives' >Objectives</option>
                                        <option value="Hardware" >Hardware</option>
                                        <option value='Software' >Software</option>
                                        <option value='Ground Station' >Ground Station</option>
                                    </select>
                                </fieldset>

                                <fieldset className='edit-fieldset'>
                                    <p className='edit-label'>Here goes the main text:</p>
                                    <textarea name="content" cols="50" rows="10" className='edit-textarea' onChange={handleChange} value={values.content}></textarea>
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

export default EditProject