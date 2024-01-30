// Footer.js
import React from 'react';
import FooterCss from './FooterCss.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={FooterCss.footerr}>
            <p>&copy; {currentYear} AdventureAceTourManagement. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
