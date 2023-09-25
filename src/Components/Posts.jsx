import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, defer, json } from "react-router-dom";
import { BlogFilter } from './BlogFilter';

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log("fetch: ", res)
    //     if(!res.ok) {
    //         throw new Response("", { status: res.status, statusText: 'NotFound' })
    //     }
    return res.json();
}

const loaderPosts = async () => {
    const loadPostsData = await fetchPosts()
    if(!loadPostsData.length){
        console.log('error json: ', loadPostsData)
        throw json({status: "404", statusText: "Posts not found"}, {status: 404})
    }
    return defer({loadPostsData: loadPostsData});
}

const Posts = () => {

    const [searchParams, setSearchParams] = useSearchParams() ;
    const latestSearch = searchParams.get('latest') || false;
    const postSearch = searchParams.get('post') || '';
    const latest = latestSearch ? 80 : 1;

    const { loadPostsData } = useLoaderData();

    return (
        <div>
            <BlogFilter postSearch={ postSearch }
                        latestSearch={ latestSearch }
                        setSearchParams={ setSearchParams }
            />

            <Link to="/react-routerv6/posts/new">Create new post</Link>
            <h1>Posts</h1>
            <Suspense fallback={<h2>Posts Loading ...</h2>}>
                {/*как получим данные resolve, отрисовываем через функцию (render props)*/}
                <Await resolve={loadPostsData}>
                    { (posts) => { return posts
                        .filter(post => post.title.includes(postSearch) && post.id >= latest)
                        .map((item) => {
                            return (<Link key={ item.id } to={ `/react-routerv6/posts/${ item.id }` }>
                                <li>{ item.title } </li>
                            </Link>)
                        }) }}
                </Await>
            </Suspense>
        </div>
    )
}



export { Posts, loaderPosts };