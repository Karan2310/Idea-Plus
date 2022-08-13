import React from 'react'
import { logout } from '../firebase';
import Navbar from './components/Navbar/Navbar';
import './Page.css'

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
        <div className='page p-3'>
            <Navbar currentUser={currentUser} handleLogout={handleLogout} />
            <div>{currentUser?.email}</div>

        </div>
    )
}

export default Page