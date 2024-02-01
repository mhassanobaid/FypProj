// Links.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import LLCss from '../Common/LinkListCss.module.css'



const LinkList = () => (

  

  <div className={LLCss.contentLink}>
    <nav>
      <ul>
      <li><a href="/">Home</a></li>
        <li><NavLink to="/about" >About Us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><a className={LLCss.liFifthLink} href="#">Login</a></li>
      </ul>
    </nav>
  </div>
);

export default LinkList;
