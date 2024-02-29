import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png';


const Header = () => {
    return (
        <header className="header">
            <h1>
                <img src={logo} alt="kasa, location d'appartements" />
            </h1>
            <nav className="nav">
                <ul className="nav_list">
                    <li className="nav_list_item_active">
                        <Link to="/kasa/">Accueil</Link>
                    </li>
                    <li className="nav_list_item">
                        <Link to="/kasa/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;