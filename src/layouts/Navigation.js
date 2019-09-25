import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

const list = [
    { name: "home", path: "/neuromania-react", exact: true },
    { name: "guests", path: "/guests" },
    { name: "harmonogram", path: "/harmonogram" },
    { name: "registration", path: "/registration" },
    { name: "previous", path: "/previous" },
    { name: "contact", path: "/contact" },
]


const Navigation = () => {
    const menu = list.map(item => (
        <div className="nav-element" key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </div>
    ))
    return (
        <nav className="nav">
            <div className="nav-elements">
                {menu}
            </div>
        </nav>
    );
}

export default Navigation;
