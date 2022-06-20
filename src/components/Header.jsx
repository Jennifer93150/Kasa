import React from 'react';
import { Link } from 'react-router-dom'

/** Assets */
import logo from '../assets/logo-kasa.png';

/** Styles */
import '../styles/header.css'

function Header() {
    return (
        <header className="Header">
            <div className="Header-top">
                <img src={logo} className="Header-logo" alt="logo" />
                <nav className='Header-nav'>
                    <Link className='Header-link' to="/">Accueil</Link>
                    <Link className='Header-link' to="/about">A Propos</Link>
                </nav> 
            </div>
        </header>
    )
}

export default Header