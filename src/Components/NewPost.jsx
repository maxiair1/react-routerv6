import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hook/useAuth';

const NewPost = () => {
    const navigate = useNavigate();
    const { signout } = useAuth();

    return (
        <div>
            <h1>New Post</h1>
            <button onClick={ () => signout(() => navigate("/react-routerv6/", { replace: true })) }>Logout</button>
        </div>
    );
}

export { NewPost };