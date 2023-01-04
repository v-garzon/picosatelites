import { Form, Formik } from 'formik'
import React from 'react'

const EditNews = () => {
    return (
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
    )
}

export default EditNews