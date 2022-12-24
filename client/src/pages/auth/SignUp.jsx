import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormInputValidation } from 'react-form-input-validation'

import ScrollToTopOnMount from '../../components/ScrollTo/ScrollToTopOnMount'
import { useUser } from '../../context/user.context'

function SignUp() {

    const { register } = useUser()
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()



    return (
        <div className='page flex justify-center items-center' name='top'
            style={{ height: 'calc(100vh - 80px)' }}
        >
            <ScrollToTopOnMount />
            <div className='grid md:grid-cols-2 w-full max-w-[1240px] place-items-center '>
                <header className='header pt-0'>
                    <h1 className='h1'>Sign up</h1>
                </header>
                <div className='div text-xl'>
                    <div className='subdiv'>
                        <Formik
                            initialValues={user}
                            enableReinitialize={true}
                            onSubmit={async (values, actions) => {
                                // console.log(values);
                                setError(await register(values))


                            }}
                        >
                            {({ handleChange, values, isSubmitting }) => (
                                <Form className='flex flex-col gap-y-3'>
                                    <label htmlFor="username" className='auth-label' >Username</label>
                                    <input type="text" name='username' className='auth-input' placeholder='Enter your username' required onChange={handleChange} value={values.username} />

                                    <label htmlFor="email" className='auth-label' >Email</label>
                                    <input type="email" name='email' className='auth-input' placeholder='Enter your email' required onChange={handleChange} value={values.email} />

                                    <label htmlFor="password" className='auth-label' >Password</label>
                                    <input type="password" name='password' className='auth-input' placeholder='Enter your password' required minLength={6} maxLength={20} onChange={handleChange} value={values.password} />

                                    <label htmlFor="confPassword" className='auth-label' >Password confirmation</label>
                                    <input type="password" name='confPassword' className='auth-input' placeholder='Reapeat your password' required onChange={handleChange} value={values.confPassword} />


                                    {/* HERE GOES THE ERROR MESSAGE */}
                                    {
                                        !error ? "" : <p className='text-red-700 border border-red-500 bg-red-300 text-sm px-4 py-2 text-center text-wrap'>{error}</p>
                                    }

                                    <button type="submit" disabled={isSubmitting} className='auth-button '>
                                        {isSubmitting ? 'Checking...' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        <Link className='text-sm font-light mt-5 hover:font-normal' to='/auth/login'>I have an account already.</Link>

                    </div>

                </div>
            </div>


        </div >
    )
}

export default SignUp