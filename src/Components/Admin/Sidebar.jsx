// Sidebar.js

import {useState,useEffect}from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faGlobe, faUserFriends, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import userPhoto from '../../Assets/profile.png';


const Sidebar = () => {
 
  return (
    <>
    <section>
    <div className="sidebar">
      <div className="profile-section">
        <div className="user-photo">
          <img src={userPhoto} alt="User" />
        </div>
        <div className="user-name">Rana Zubair</div>
      </div>
      
      <div className="menu-section">
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faChartBar} />
          Dashboard
        </Link>
        <Link to="/tour-company" className="menu-item">
          <FontAwesomeIcon icon={faBuilding} />
          Tour Company
        </Link>
        <Link to="/tours" className="menu-item">
          <FontAwesomeIcon icon={faGlobe} />
          Tours
        </Link>
        <Link to="/user" className="menu-item">
          <FontAwesomeIcon icon={faUserFriends} />
          User
        </Link>
      </div>
      
      <Link to="/logout" className="menu-item">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <h3>Logout</h3>
      </Link>
    </div>
    </section>
    </>
  );
};

export default Sidebar;
