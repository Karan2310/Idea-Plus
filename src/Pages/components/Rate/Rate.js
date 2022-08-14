import React, { useEffect, useState } from 'react'
import { Modal, Group } from '@mantine/core';
import { BsStar, BsStarFill } from 'react-icons/bs'
import { useLocalStorage } from '@mantine/hooks';
import { getDatabase, ref, child, push, update } from "firebase/database";


const db = getDatabase();

const Rate = ({ opened, setOpened, ideaId, existingRatings }) => {
    const [value, setValue] = useLocalStorage({ key: 'isRated', defaultValue: [] });

    const [rating, setRating] = useState([0, 0, 0, 0, 0])

    useEffect(() => {
        setRating([0, 0, 0, 0, 0])
    }, [ideaId])


    const pushToDb = (copyRating) => {

        // A post entry.

        let postData = {}

        if (existingRatings) {
            postData = {
                ratings: [...existingRatings, copyRating.reduce((a, b) => a + b)]
            }
        } else {
            postData = {
                ratings: [copyRating.reduce((a, b) => a + b)]
            }
        }

        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'all_ideas')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/all_ideas/' + ideaId + "/ratings"] = postData.ratings;
        updates['/all_ideas/' + ideaId + "/averageRatings"] = postData.ratings.reduce((a, b) => a + b) / postData.ratings.length;
        return update(ref(db), updates);

    }

    const updateRatings = (endingIndex) => {
        const copyRating = [1, 0, 0, 0, 0]
        for (let index = 0; index < rating.length; index++) {
            if (index < endingIndex) {
                copyRating[index] = 1;
            } else { copyRating[index] = 0; }
        }
        copyRating[endingIndex] = 1;
        setRating(copyRating)
        pushToDb(copyRating);

        const tempSet = new Set([...value, ideaId])
        setValue([...tempSet])

        setTimeout(() => { setOpened(false) }, 1000)
    }

    return (
        <div className='rate'>
            <Modal
                withCloseButton={false}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Rate this idea"
            >
                <Group direction="column" position="apart" className="w-100">
                    {
                        rating.map((eachRating, index) =>
                            <div key={index} onClick={() => updateRatings(index)}> {eachRating === 0 ? <BsStar size={20} /> : <BsStarFill size={20} />} </div>)
                    }
                </Group>

            </Modal>
        </div>
    )
}

export default Rate