import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import { Routes, Route } from 'react-router-dom'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default Auth