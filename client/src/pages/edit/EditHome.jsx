import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useText } from '../../context/text.context'

function EditHome() {

    const { homeError, setHomeError } = useState(null)

    const { user, pushNewContent, pullPageContent } = useText()

    const [content, setContent] = useState()

    // const getContent = async () => {
    //     var response = await pullPageContent({ page: 'HOME' })
    //     // console.log(response)
    //     setContent(response)
    // }

    // useEffect(() => {
    //     getContent()
    // })

    return (
        <div className='div' name='home'>
            <div className='subdiv'>
                <h2 className='h2'>Home</h2>
                <div className=''>
                    <Formik
                        enableReinitialize={true}
                        initialValues={ !content ?
                            {
                                page: 'HOME',
                                section: '',
                                content: '',
                                image: '',
                                user: user.username,
                                user_id: user.id
                            } :
                            {
                                page: 'HOME',
                                section: 'Our Purpose',

                            }}
                        onSubmit={async (values) => {
                            // console.log(values)
                            const response = await pushNewContent(values)
                            // console.log(response)
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
                                    <input type="file" name="image" className='edit-input' />
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