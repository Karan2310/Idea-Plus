import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { ScrollArea } from '@mantine/core';

const Home = () => {
    return (
        <div className='home my-3 container-fluid'>
            <div className="row">
                <div className="col-md-6 col-lg-3 p-3">
                    <Card shadow="sm" p="lg" radius="md" >
                        <Card.Section>
                            <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                3.5 / 5
                            </Badge>
                        </Group>
                        <ScrollArea style={{ height: 125 }} scrollbarSize={8}>
                            <Text size="sm" color="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>
                        </ScrollArea>

                        <Button variant="light" color="blue" mt="md" radius="md">
                            <a href="#" style={{ textDecoration: "none" }}>Mind-Map Link</a>
                        </Button>
                        <Button variant="light" color="pink" mt="md" radius="md" style={{ float: "right" }}>
                            Rate
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home