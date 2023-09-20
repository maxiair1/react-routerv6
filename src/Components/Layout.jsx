import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";


const Layout = () => {

    return (
        <>
            <header className="App-header">
                <NavLink to="/react-routerv6/" style={ ({ isActive }) => isActive ? {
                    color: '#0074D9', padding: '0 30px'
                } : { color: '#61dafb', padding: '0 30px' } }>Home</NavLink>
                <NavLink to="/react-routerv6/about"
                         className={ ({ isActive }) => isActive ? "active-link App-link" : "App-link" }>About</NavLink>
                <CustomLink to="/react-routerv6/posts" text="Posts"/>
            </header>
            <Outlet/>
            <footer className="App-footer">2023</footer>
        </>
    )
}

export { Layout };