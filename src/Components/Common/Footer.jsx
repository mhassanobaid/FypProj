// Footer.js
import React from 'react';
import FooterCss from './FooterCss.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={FooterCss.footerr}>
        <div className={FooterCss.footerContent}>
          
          <div className={FooterCss.newsletterSignup}>
            <p>Sign up for our newsletter:</p>
            <div className={FooterCss.signupIcon}>
              <MailOutlineIcon fontSize='large' color='black'/>
            </div>
            </div>
            <div className={FooterCss.rights}>   <p>&copy; {currentYear} AdventureAceTourManagement. All rights reserved.</p></div>
        </div>  
       
       <div className={FooterCss.anotherSction}>
            <p className={FooterCss.conct}>
           Connect With Us
            </p>
            <FacebookIcon className={FooterCss.fb}/>
            </div>  
      </footer>
    );
}

export default Footer;
