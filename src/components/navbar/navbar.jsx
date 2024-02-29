import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">A Propos</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;