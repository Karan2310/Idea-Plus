import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import { Routes, Route } from 'react-router-dom'

const Auth = ({ currentUser, handleLogin }) => {
    return (
        <>
            <Routes>
                <Route index path='/' element={<Login handleLogin={handleLogin} />} />
                <Route path='/register' element={<Register currentUser={currentUser} handleLogin={handleLogin} />} />
            </Routes>
        </>
    )
}

export default Auth