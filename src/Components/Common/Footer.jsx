// Footer.js
import React from 'react';
import FooterCss from './FooterCss.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import * as Components from '../../Components/Common/Components'
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = (props) => {
       
    const currentYear = new Date().getFullYear();
    const footerStyle = {
      top: props.Top ? props.Top+'vh' : '100%', // If height prop is provided, use it; otherwise, set to 100vh
    };
    return (
     
      <Components.Footer style={footerStyle}>
        
        <Components.FooterContent>
          
        <Components.FooterNewsLetterSignup>
            <p>Sign up for our newsletter:</p>
            <Components.FooterSignupIcon>
              <MailOutlineIcon fontSize='large' color='black'/>
              </Components.FooterSignupIcon>
            </Components.FooterNewsLetterSignup>
            <Components.FooterRights>   <p>&copy; {currentYear} AdventureAceTourManagement. All rights reserved.</p></Components.FooterRights>
            </Components.FooterContent>
       
        <Components.FooterAnotherSction>
            <p className={FooterCss.conct}>
           Connect With Us
            </p>
            <Components.FooterFb>
            <FacebookIcon/></Components.FooterFb>
            </Components.FooterAnotherSction> 
            </Components.Footer>
    );
}

export default Footer;
