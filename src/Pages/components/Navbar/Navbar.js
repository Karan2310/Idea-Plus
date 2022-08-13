import React from 'react'
import { Avatar } from '@mantine/core';
import { HoverCard, Button, Text, Group } from '@mantine/core';
import './Navbar.css'

const Navbar = ({ currentUser, handleLogout }) => {
    const iconAlpha = currentUser?.email.slice(0, 1).toUpperCase();
    return (
        <>
            <div className="navbar container-fluid px-3 bg-light d-flex align-items-center justify-content-between">
                <div className="navbar-brand">
                    <h5>Idea<span>Plus+</span></h5>
                </div>
                <Group position="center">
                    <HoverCard style={{ width: "fit-content" }} shadow="md" radius="md">
                        <HoverCard.Target>
                            <Avatar color="primary" radius="xl">{iconAlpha}</Avatar>
                        </HoverCard.Target>
                        <HoverCard.Dropdown style={{ marginLeft: "-1rem", marginTop: "0.5rem" }}>
                            <Text size="md">
                                <p style={{ fontWeight: "500" }}>{currentUser?.email}</p>
                                <button className='logout-btn' disabled={!currentUser} onClick={handleLogout}>Logout</button>
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>
            </div>
        </>
    )
}

export default Navbar