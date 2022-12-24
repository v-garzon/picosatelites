import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserRouter } from 'react-router-dom'
import UserContextLayout from "../context/layout/user.context.layout";
import { useText } from "../context/text.context";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Edit from "../pages/edit/Edit";
import Home from '../pages/Home'
import News from '../pages/News'
import OurTeam from "../pages/OurTeam";
import Project from "../pages/Project";
import Root from "../pages/Root";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'support',
                element: <About />
            },
            {
                path: 'ourteam',
                element: <OurTeam />
            },
            {
                path: 'project',
                element: <Project />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'auth',
                element: <UserContextLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'signup',
                        element: <SignUp />
                    }
                ]
            },
            {
                path: 'edit',
                element: <Edit />
            }
        ]


    },

])

export default router

{/* 
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/support' element={<About />} />
    <Route path='/ourteam' element={<OurTeam />} />
    <Route path='/news' element={<News />} />
    <Route path='/project' element={<Project />} />

    <Route element={<UserContextLayout />}>
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} />
    </Route>

    <Route path='/edit' element={<Edit />} />



</Routes> 
*/}