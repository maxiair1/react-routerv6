import {  Suspense } from "react";
import { Link, useNavigate, useAsyncValue, Await, useLoaderData } from 'react-router-dom';

async function getPost(id) {  //запрос к api за данными
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`);
    return res.json();
}

const loaderPost = async ({ params }) => { //loader для роута, передаем объект с загруженными данными
    return { post: getPost(params.id), id: params.id };
}

const PostFieldsData = () => {
    const post = useAsyncValue(); //берем данные, которые предоставляет Await
    return (
        <>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </>
    )
}

const PostPage = () => {
    const { post, id } = useLoaderData(); //берем данные из loader
    const navigate = useNavigate();

    //переход назад
    const goBack = () => navigate(-1);
    const goHome = () => navigate("/react-routerv6/", { replace: true });

    return (
        <div>
            <button onClick={ goBack }>Go back</button>
            <button onClick={ goHome }>Go Home</button>
            {/*отрисовываем fallback, пока данные грузятся*/}
            <Suspense fallback={<h2>Post is loading...</h2>}>
                <Await //как данные пришли resolve, отрисовываем children, передаем данные post в children через useAsyncValue
                    resolve={ post }
                    children={ <PostFieldsData/> }
                />
            </Suspense>
            <Link to={ `/react-routerv6/posts/${ id }/edit` }>Edit this post</Link>
        </div>
    )
}

export { PostPage, loaderPost };