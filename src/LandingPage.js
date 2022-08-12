import React from 'react'
import Auth from './Auth/Auth'
import Page from './Pages/Page'
import { BrowserRouter } from 'react-router-dom'

const LandingPage = ({ isLoggedIn }) => {
    return (
        <>
            <BrowserRouter>
                {isLoggedIn ? <Page /> : <Auth />}
            </BrowserRouter>
        </>
    )
}

export default LandingPage