import React from 'react';
import logo from '../assets/logo.png';
import '../style/components/_header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="sportsee" />
            </div>
            <div className="nav">
                <ul>
                    <li className="link">Accueil</li>
                    <li className="link">Profil</li>
                    <li className="link">Réglage</li>
                    <li className="link">Communauté</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
