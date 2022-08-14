import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { getDatabase, ref, child, push, update } from "firebase/database";
import { useLocalStorage } from '@mantine/hooks';


const Like = ({ ideasId, currentUser }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [value, setValue] = useLocalStorage({ key: 'isLiked', defaultValue: [] });

    useEffect(() => {
        if (value && value.includes(ideasId)) {
            setIsLiked(true)
        }
        else {
            setIsLiked(false)
        }
    }, [ideasId])


    const handleLike = () => {
        if (value && value.includes(ideasId)) {
            const tempSet = new Set([...value])
            tempSet.delete(ideasId)
            setValue([...tempSet])
            setIsLiked(false)
        } else {
            const tempSet = new Set([...value, ideasId])
            setValue([...tempSet])
            setIsLiked(true)
        }
    }

    return (
        <div>
            {isLiked ? <AiFillLike size={25} onClick={handleLike} /> : <AiOutlineLike size={25} onClick={handleLike} />}
        </div>
    )
}

export default Like