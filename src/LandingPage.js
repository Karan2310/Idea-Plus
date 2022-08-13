import React from 'react'
import Auth from './Auth/Auth'
import Page from './Pages/Page'
import { BrowserRouter } from 'react-router-dom'

const LandingPage = ({ isLoggedIn, currentUser, handleLogin }) => {
    return (
        <>
            <BrowserRouter>
                {isLoggedIn ? <Page currentUser={currentUser} /> : <Auth currentUser={currentUser} handleLogin={handleLogin} />}
            </BrowserRouter>
        </>
    )
}

export default LandingPage