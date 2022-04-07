import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import  styles from './Navbar.module.css';

const Navbar = ()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">React Router</a>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/" exact="true"  className="nav-link">Home</NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink to="/about"  className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;