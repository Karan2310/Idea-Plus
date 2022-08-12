import React from 'react'
import { TextInput, Button, Group, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.trim().length > 0 ? null : 'Password is required')
        },
    });

    return (
        <div className='Login d-flex align-items-center justify-content-between p-3'>
            <p className='register_link'>New to IdeaPlus+ ?
                <NavLink to="/register">
                    Register Here
                </NavLink> </p>
            <div className="container">
                <h3 className='text-center'>Welcome to Idea<span>Plus+</span></h3>
                <div className="container-fluid mt-3">
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                            radius="md"
                        />
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Password"
                            {...form.getInputProps('password')}
                            radius="md"
                        />
                        <Group position="center" className='mt-4'>
                            <Button type="submit" radius="md">Submit</Button>
                        </Group>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login