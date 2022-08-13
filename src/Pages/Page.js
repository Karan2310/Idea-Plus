import React from 'react'
import { logout } from '../firebase';

const Page = ({ currentUser }) => {

    async function handleLogout() {
        try {
            await logout();
            console.log(logout);
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <div>{currentUser?.email}</div>
            <button disabled={!currentUser} onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Page