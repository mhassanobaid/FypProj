// Sidebar.js

import {useState,useEffect}from 'react';
import s from './TCSidebar.module.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faGlobe, faUserFriends, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import userPhoto from '../../Assets/profile.png';


const TCSidebar = () => {
 
  return (
    <>
    <section>
    <div className={s.ssidebar}>
      <div className={s.sprofile_section}>
        <div className={s.suser_photo}>
          <img src={userPhoto} alt="User" />
        </div>
        <div className={s.suser_name}>Rana Zubair</div>
      </div>
      
      <div className={s.smenu_section}>
        <Link to="/" className={s.smenu_item}>
          <FontAwesomeIcon icon={faChartBar} />
          Dashboard
        </Link>
       
        <Link to="/tours" className={s.smenu_item}>
          <FontAwesomeIcon icon={faGlobe} />
          Tours
        </Link>
        <Link to="/tours" className={s.smenu_item}>
          <FontAwesomeIcon icon={faGlobe} />
          Add Tours
        </Link>
        <Link to="/tours" className={s.smenu_item}>
          <FontAwesomeIcon icon={faGlobe} />
          Update Tour
        </Link>
        
      </div>
      
      <Link to="/logout" className={s.smenu_item}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <h3>Logout</h3>
      </Link>
    </div>
    </section>
    </>
  );
};

export default TCSidebar;
