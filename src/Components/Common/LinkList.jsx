// Links.js
import {React,useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom'; 
import LLCss from '../Common/LinkListCss.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useUser } from '../User/UserContext';
import DropDown from '../Common/DropDown';
const LinkList = ({ Auth,WelcomeMsg }) => {
  const { user, updateUser } = useUser();
  const auth = user ? true : false;
  
  const UseName = user? user.username : 'Welcome User';
  const emaiL = user?user.email : '';
  // if direct login occurs then extract username from email by regex
  const usernamE = emaiL.match(/^[^@]*/)[0];

  const [optionsVisible, setOptionsVisible] = useState(false);
  const BookedToursLength = user?.bookedTours?.length || 0;
  const toggleOptions = () => {
    setOptionsVisible((prevVisible) => !prevVisible);
  };

 




  return (
    <div className={LLCss.contentLink}>
      <nav >
        <ul >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/signup">SignUp</NavLink></li>
          <li><NavLink to="/signup?login=true">Log In</NavLink></li>
          {auth && (<div className={LLCss.lli}>
            <li onClick={toggleOptions}>

              <AccountCircleIcon fontSize="large" style={{ backgroundColor: 'white', zIndex: '200px' }} />
             
              </li>
              
            <p>{usernamE}</p>
            {BookedToursLength > 0 && <div className={LLCss.tooltiptext}><NotificationsActiveIcon/></div>}
            {optionsVisible && (
              
              <DropDown/>
                // <div className={LLCss.dropdown}>
                //   <ul>
                //     <li><NavLink to="/tourist">Booked Tours</NavLink></li>
                //     <li><NavLink to="/profile">Manage Profile</NavLink></li>
                //     <li><NavLink to="/favorites">See Favorites</NavLink></li>
                //     <li><NavLink to="/logout">Log Out</NavLink></li>
                //   </ul>
                // </div>

              )}
            
            </div>)}
        </ul>
      </nav>
    </div>
  );
};

export default LinkList;
