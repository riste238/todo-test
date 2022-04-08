import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import  styles from './Navbar.module.css';

const Navbar = ()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/" exact="true"  className="nav-link">All Todo</NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink to="/complete"  className="nav-link">Completed</NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink to="/incompleted"  className="nav-link">Incompleted</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;