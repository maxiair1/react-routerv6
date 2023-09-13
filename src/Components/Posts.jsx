import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BlogFilter } from './BlogFilter';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams() ;
    const latestSearch = searchParams.get('latest') || false;
    const postSearch = searchParams.get('post') || '';
    const latest = latestSearch ? 80 : 1;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <BlogFilter postSearch={ postSearch }
                        latestSearch={ latestSearch }
                        setSearchParams={ setSearchParams }
            />

            <Link to="/posts/new">Create new post</Link>
            <h1>Posts</h1>
            { posts
                .filter(post => post.title.includes(postSearch) && post.id >= latest)
                .map((item) => {
                    return (<Link key={ item.id } to={ `/posts/${ item.id }` }>
                        <li>{ item.title } </li>
                    </Link>)
                }) }
        </div>
    )
}

export { Posts };