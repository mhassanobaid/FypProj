import React from 'react';
import { NavLink } from 'react-router-dom';

import DDCSS from './DropDownCss.module.css'; // Import your CSS file for styling
import {useNavigate} from 'react-router-dom';
import { dropDown  } from '../../Components/Common/Components';
import { useLocation } from 'react-router-dom';
import { useUser } from '../User/UserContext';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


const DropDown = () => {

  

  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const favoriteToursLength = user?.favorites.length || 0;
  const bookedToursLength = user?.bookedTours.length || 0;
  const loc = useLocation();
  const handleLogout = () => {
    // Perform logout actions (clear user session)
    updateUser(null); // Update user context to clear user session
    navigate('/'); // Redirect user to home page
  };

  return (
    <div className={DDCSS.dropDownProfile}>
      <ul>
        <li style={{margin:'2px',padding:'2px'}} ><NavLink className={DDCSS.dropDownItem} to="/favorites?source=b2">Booked Tours
        {bookedToursLength > 0 && (
              <div className={DDCSS.tooltiptexT}></div>
            )}</NavLink></li>
        <li style={{margin:'2px',padding:'2px'}}><NavLink className={DDCSS.dropDownItem} to="/ManagProf">Manage Profile</NavLink></li>
        <li style={{margin:'2px',padding:'2px'}}><NavLink className={DDCSS.dropDownItem} to="/favorites?source=f1">See Favorites
        {favoriteToursLength > 0 && (
              <div className={DDCSS.tooltiptext}></div>
            )}
        </NavLink></li>
        <li onClick={handleLogout}><span className={DDCSS.dropDownItem} style={{fontWeight:'bold'}}>Log Out</span></li>
      </ul>
      
    </div>
  );
}

export default DropDown;
