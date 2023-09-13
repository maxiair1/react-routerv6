import React from "react";
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="team">Our team</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export { About };