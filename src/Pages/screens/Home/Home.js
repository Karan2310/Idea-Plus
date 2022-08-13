import React, { useState } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import { useEffect } from 'react';

import { getDatabase, ref, onValue } from "firebase/database";



const Home = () => {
    const [ideas, setIdeas] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const db = getDatabase();
        const postsRef = ref(db, 'all_ideas');

        onValue(postsRef, (snapshot) => {
            let data = snapshot.val();
            console.log(data);
            data = Object.values(data);
            setIdeas(data)
            setLoading(false)
        });
    }, [])

    return (
        <div className='home my-3 container-fluid'>
            <div className="row">
                {loading === true ? "Loading" : (<>
                    {
                        ideas.map(ideas => {
                            const { topic, email, idea, mindmap_url, likes, rating } = ideas;
                            return (
                                <div className="co  l-md-6 col-lg-3 p-3">
                                    <Card shadow="sm" p="lg" radius="md" >
                                        <Card.Section>
                                            <Image
                                                src="https://images.unsplash.com/photo-1660066543518-57247c9fc76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
                                                height={160}
                                                alt="Norway"
                                            />
                                        </Card.Section>

                                        <Group position="apart" mt="md" mb="xs">
                                            <Text weight={500}>{topic}</Text>
                                            <Badge color="pink" variant="light">
                                                {rating} / 5
                                            </Badge>
                                        </Group>
                                        <Group position="apart" mb="md">
                                            <Text weight={400} size="xs" color={'dimmed'}>author: {email}</Text>
                                        </Group>
                                        <ScrollArea style={{ height: 125 }} scrollbarSize={8}>
                                            <Text size="sm" color="dimmed">
                                                {idea}
                                            </Text>
                                        </ScrollArea>

                                        <Button variant="light" color="blue" mt="md" radius="md">
                                            <a href={mindmap_url} target="blank" style={{ textDecoration: "none" }}>Mind-Map Link</a>
                                        </Button>
                                        <Button variant="light" color="pink" mt="md" radius="md" style={{ float: "right" }}>
                                            Rate
                                        </Button>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </>
                )}

            </div>
        </div>
    )
}

export default Home