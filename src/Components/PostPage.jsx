import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const navigate = useNavigate();
    const location = useLocation();

    //переход назад
    const goBack = () => navigate(-1);
    const goHome = () => navigate("/react-routerv6/", { replace: true });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            <button onClick={ goBack }>Go back</button>
            <button onClick={ goHome }>Go Home</button>
            { post && (
                <>
                    <h1>{ post.title }</h1>
                    <p>{ post.body }</p>
                    <Link to={ `/react-routerv6/posts/${ id }/edit` }>Edit this post</Link>
                </>) }
        </div>
    )
}

export { PostPage };