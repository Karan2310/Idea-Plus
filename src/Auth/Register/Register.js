import React from 'react'
import { TextInput, Button, Group, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NavLink } from 'react-router-dom';
import { register } from '../../firebase';
import './Register.css'
import { useState } from 'react';

const Register = ({ currentUser, handleLogin }) => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.trim().length > 0 ? null : 'Password is required'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });

    const onSubmit = (values) => {
        setIsLoading(true)
        register(values.email, values.password)
            .then(() => {
                alert('Registered successfully');
                setIsLoading(false)
            }).catch((error) => {
                alert(error);
                setIsLoading(false)
            }
            );
    }

    return (
        <div className='Register d-flex align-items-center justify-content-between p-3'>
            <p className='register_link'>Back to
                <NavLink to="/">
                    Login ?
                </NavLink>
            </p>
            <div className="container">
                <h3 className='text-center'>Register with Idea<span>Plus+</span></h3>
                <div className="container-fluid mt-4">
                    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
                        <PasswordInput
                            mt="md"
                            label="Confirm password"
                            placeholder="Confirm password"
                            {...form.getInputProps('confirmPassword')}
                        />

                        <Group position="center" className='mt-4'>
                            <Button disabled={isLoading} type="submit" radius="md">Register</Button>
                        </Group>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register