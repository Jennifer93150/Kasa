import React from 'react';

/** Assets */
import logo from '../assets/logo-footer.png';

/** Styles */
import '../styles/footer.css';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Logo" className="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer