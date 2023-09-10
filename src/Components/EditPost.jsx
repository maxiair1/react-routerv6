import React from "react";
import { useParams } from 'react-router-dom'

const EditPost = () => {
    const { id } = useParams();
    return (
        <h2>
            Edit Post { id }
        </h2>
    );
}

export { EditPost };