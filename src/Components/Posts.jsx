import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { SinglePage } from "./SinglePage";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((item) => {
            return (<Link key={item.id} to={`/posts/${item.id}`}>
                <li>{item.title} </li>
            </Link>)
        })}
        </div>
    )
}

export { Posts };