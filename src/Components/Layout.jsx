import React from "react";
import {Link, Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <header className="App-header">
                <Link to="/" className="App-link">Home</Link>
                <Link to="/about" className="App-link">About</Link>
                <Link to="/posts" className="App-link">Posts</Link>
            </header>
            <Outlet/>
            <footer className="App-footer">2023</footer>
        </>
    )
}

export {Layout};