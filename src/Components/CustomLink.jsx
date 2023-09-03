import React from "react";
import {Link, useMatch} from "react-router-dom";
import "./CustomLink.css"

const CustomLink = ({to, text, ...props}) => {
    const match = useMatch(to);
     return (
        <Link to={to} {...props} className={match?"active-link":"link"} >{text}</Link>
    )
}

export { CustomLink };