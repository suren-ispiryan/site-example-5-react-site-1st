import React from 'react';
import "./Nav.css";
import {NavLink} from "react-router-dom";


/* Navigation Bar */
const Nav = () => {
    return <nav className="nav">
        <div className="opacity">
            <ul>
                <li><NavLink to="/Profile"> Profile </NavLink></li>
                <li><NavLink to="/Dialogs"> Messages </NavLink></li>
                <li><NavLink to="/Newsfeed"> News </NavLink></li>
                <li><NavLink to="/Musiclist"> Music </NavLink></li>
                <li><NavLink to="/settingslist"> Settings </NavLink></li>
            </ul>
        </div>
    </nav>
}

export default Nav;
