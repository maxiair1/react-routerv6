import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'

const SinglePage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (

        <div>
            { post && (
                <>
                    <h1>{ post.title }</h1>
                    <p>{ post.body }</p>
                    <Link to={ `/posts/${ id }/edit` }>Edit this post</Link>
                </>) }
        </div>
    )
}

export { SinglePage };