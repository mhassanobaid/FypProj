// Sidebar.js

import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faGlobe, faUserFriends, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import userPhoto from '../../Assets/profile.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="user-photo">
          <img src={userPhoto} alt="User" />
        </div>
        <div className="user-name">John Doe</div>
      </div>
      
      <div className="menu-section">
        <div className="menu-item">
          <FontAwesomeIcon icon={faChartBar} /> {/* Add the icon to the Dashboard menu item */}
          Dashboard
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBuilding} /> {/* Add the icon to the Tour Company menu item */}
          Tour Company
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faGlobe} /> {/* Add the icon to the Tours menu item */}
          Tours
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUserFriends} /> {/* Add the icon to the User menu item */}
          User
        </div>
      </div>
      
      <div className="menu-item">
        <FontAwesomeIcon icon={faSignOutAlt} /> {/* Add the icon to the Logout menu item */}
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Sidebar;
