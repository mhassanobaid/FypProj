// Footer.js
import React from 'react';
import './FooterCss.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer style={{ backgroundColor: '#1172D4' }}>
            <p>&copy; {currentYear} AdventureAceTourManagement. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
