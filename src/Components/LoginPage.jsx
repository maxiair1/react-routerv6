import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { signin } = useAuth();
    const fromPage = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.userName.value;
        signin(user, () => navigate(fromPage, { replace: true }))
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>
                    Name:<input name="userName"></input>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export { LoginPage };