import React from 'react'
import './PostIdea.css'
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TextInput, Button, Textarea } from '@mantine/core';
import { API } from '../../../cred';

const PostIdea = () => {
    const [opened, setOpened] = useState(false);
    const form = useForm({
        initialValues: { topic: '', email: '', idea: "", mindmap_url: "", likes: 0, rating: 0 },

        // functions will be used to validate values at corresponding key
        validate: {
            topic: (value) => (value.length < 2 ? 'Topic must have at least 2 letters' : null),
            mindmap_url: (value) => (value.length < 2 ? 'Topic must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            idea: (value) => (value.length < 10 ? 'Idea must have at least 10 letters' : null),
        },
    });

    const hasAllValues = () =>
        Object.values(form.values).every((value, __, _) => value !== void (0) && value !== "" && value !== null)

    const handleSubmit = async (e) => {

        if (!hasAllValues()) {
            alert("All fields are required")
            return;
        }
        e.preventDefault();
        const res = await fetch(`${API}/all_ideas.json`,
            {
                method: "POST",
                Headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form.values),
            }
        )
        if (res) {
            alert("Idea posted successfully")
            setOpened(false);
        } else {
            alert("Error")
        }

        form.reset();


    }
    return (
        <>
            <div className='post' onClick={() => setOpened(true)}>
                <p id='add-btn'>+</p>
            </div>
            <Modal
                closeOnClickOutside={false}
                centered
                withCloseButton={false}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Share Your Amazing Idea"
                radius='md'
            >
                <div className="container-fluid p-0">
                    <form onSubmit={handleSubmit}>
                        <TextInput label="Topic" placeholder="Idea for..." {...form.getInputProps('topic')} radius="md" />
                        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} radius="md" />
                        <Textarea
                            mt="sm"
                            label="Idea"
                            placeholder="Share Your Idea..."
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...form.getInputProps('idea')}
                            radius="md"
                        />
                        <TextInput label="Mindmap URL" placeholder="URL" mt="sm" {...form.getInputProps('mindmap_url')} radius="md" />
                        <div className="mt-2">
                            <Button color="red" variant='outline' mt="sm" onClick={() => setOpened(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" mt="sm" style={{ float: "right" }}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default PostIdea