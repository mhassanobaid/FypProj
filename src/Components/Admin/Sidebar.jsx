// Sidebar.js

import {useState,useEffect}from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faGlobe, faUserFriends, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import userPhoto from '../../Assets/images/profile.png';


const Sidebar = () => {
 
  return (
    <>
    <section>
    <div className="ssidebar">
      <div className="sprofile-section">
        <div className="suser-photo">
          <img src={userPhoto} alt="User" />
        </div>
        <div className="suser-name">Rana Zubair</div>
      </div>
      
      <div className="smenu-section">
        <Link to="/" className="smenu-item">
          <FontAwesomeIcon icon={faChartBar} />
          Dashboard
        </Link>
        <Link to="/tour-company" className="smenu-item">
          <FontAwesomeIcon icon={faBuilding} />
          Tour Company
        </Link>
        <Link to="/tours" className="smenu-item">
          <FontAwesomeIcon icon={faGlobe} />
          Tours
        </Link>
        <Link to="/user" className="smenu-item">
          <FontAwesomeIcon icon={faUserFriends} />
          User
        </Link>
      </div>
      
      <Link to="/logout" className="smenu-item">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <h3>Logout</h3>
      </Link>
    </div>
    </section>
    </>
  );
};

export default Sidebar;
