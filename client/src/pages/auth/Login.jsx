import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import ScrollToTopOnMount from '../../components/ScrollTo/ScrollToTopOnMount'
import { useUser } from '../../context/user.context'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useText } from '../../context/text.context'

function Login() {

    const { login } = useUser()
    const [user1, setUser] = useState({
        username: '',
        password: '',
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { user } = useText()

    return (
        <div className='page flex justify-center items-center'
            style={{ height: 'calc(100vh - 80px)' }}
        >
            {!user ? "" : <Navigate to='/edit' />}
            <ScrollToTopOnMount />
            <div className='grid md:grid-cols-2 w-full max-w-[1240px] place-items-center '>
                <header className='header pt-0'>
                    <h1 className='h1'>Login</h1>
                </header>
                <div className='div text-xl'>
                    <div className='subdiv'>
                        <Formik
                            initialValues={user1}
                            enableReinitialize={true}
                            onSubmit={async (values, actions) => {
                                // console.log(values)
                                const response = await login(values)
                                setError(response)


                            }}

                        >
                            {({ isSubmitting, handleChange, values }) => (
                                <Form className='flex flex-col gap-y-3'>
                                    <label htmlFor="username" className='auth-label' >Username </label>
                                    <input type="text" name='username' className='auth-input' placeholder='Enter your username or email' onChange={handleChange} value={values.username} />

                                    <label htmlFor="password" className='auth-label' >Password</label>
                                    <input type="password" name='password' className='auth-input' placeholder='Enter your password' onChange={handleChange} value={values.password} />


                                    {/* HERE GOES THE ERROR MESSAGE */}
                                    {
                                        !error ? "" : <p className='text-red-700 border border-red-500 bg-red-300 text-sm px-4 py-2 text-center text-wrap'>{error}</p>
                                    }

                                    <button type="submit" className='auth-button '>
                                        {isSubmitting ? 'Checking...' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        <Link className='text-sm font-light mt-5 hover:font-normal' to='/auth/signup'>Don't have an Account yet?</Link>

                    </div>

                </div>
            </div>



        </div >
    )
}

export default Login