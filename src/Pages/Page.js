import React from 'react'
import { logout } from '../firebase';
import Navbar from './components/Navbar/Navbar';
import './Page.css'
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import PostIdea from './screens/PostIdea/PostIdea';

const Page = ({ currentUser, handleLogin }) => {

    async function handleLogout() {
        try {
            await logout();
            handleLogin();
            console.log(logout);
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <div className='page p-3'>
                <Navbar currentUser={currentUser} handleLogout={handleLogout} />
                <PostIdea />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default Page