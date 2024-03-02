import React from 'react';
import { NavLink } from "react-router-dom"; 
import './Navbar.scss';
import logo from '../../assets/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>A Propos</NavLink>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;