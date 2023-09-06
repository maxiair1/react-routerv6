import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <Link to="/posts/new">Create new post</Link>
            <h1>Posts</h1>
            { posts.map((item) => {
                return (<Link key={ item.id } to={ `/posts/${ item.id }` }>
                    <li>{ item.title } </li>
                </Link>)
            }) }
        </div>
    )
}

export { Posts };