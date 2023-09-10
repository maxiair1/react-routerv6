import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";


const Layout = () => {

    return (
        <>
            <header className="App-header">
                <NavLink to="/" style={ ({ isActive }) => isActive ? {
                    color: '#0074D9',
                    padding: 0 + ' ' + 30 + 'px'
                } : { color: '#61dafb', padding: 0 + ' ' + 30 + 'px' } }>Home</NavLink>
                <NavLink to="/about"
                         className={ ({ isActive }) => isActive ? "active-link App-link" : "App-link" }>About</NavLink>
                <CustomLink to="/posts" text="Posts"/>
            </header>
            <Outlet/>
            <footer className="App-footer">2023</footer>
        </>
    )
}

export { Layout };