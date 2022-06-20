import React from "react";
import { Link } from 'react-router-dom'

/** Components */
import Header from '../components/Header'
import Footer from '../components/Footer'

/** Styles */
import '../styles/error.css'

function Error () {
    return (
        <div>
            <div className="main-container error">
                <Header/>
                <h1 className="error-title">404</h1>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="homeback-link" to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </div>
        
    );
}

export default Error