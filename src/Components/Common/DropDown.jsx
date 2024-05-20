import React, { useEffect,useState } from 'react';
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
  //const favoriteToursLength = user?.favorites.length || 0;
   const [favoriteToursLength, setFavoriteToursLength] = useState(0);
  //const bookedToursLength = user?.bookedTours.length || 0;
  const loc = useLocation();
   const [bookedToursLength, setBookedToursLength] = useState(0);
  const handleLogout = () => {
    // Perform logout actions (clear user session)
    updateUser(null); // Update user context to clear user session
    navigate('/'); // Redirect user to home page
  };
  

  const fetchFavTours = async () => {
    
    try {
      const requestBody = { action: "retrieveFavTours", userId: user.id };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
      });
       console.log("RESPONSE IS :-"+response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursData = await response.json();
          console.log("UHOME KE FAV FETCH ME HN\n");
          
          console.log("\n");
        
          const modifiedToursDatae = toursData.map(tour => ({
            descreption: tour.descreption,
            tourid: tour.tourid,
            title: tour.title,
            location: tour.location,
            image_url: tour.image_url,
            company_id: tour.company_id,
            departure_date: tour.departure_date,
            number_of_persons: tour.number_of_persons,
            price: tour.price,
            number_of_days: tour.number_of_days
            
          })); 
         
          updateUser({ ...user, favorites: modifiedToursDatae });
         
          console.log(user);
          
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Failed to retrieve tours:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };
  useEffect(()=>{
          if(user)
            {
              fetchFavTours();
            }
  },[]);

  useEffect(() => {
    setBookedToursLength(user?.bookedTours.length || 0);
    setFavoriteToursLength(user?.favorites.length||0);
  }, [user]);
  return (
    <div className={DDCSS.dropDownProfile}>
      <ul>
        <li style={{margin:'1px',padding:'1px'}}><NavLink className={DDCSS.dropDownItem} to="/tCSignUp">Sell Tours</NavLink></li>
        <li style={{margin:'2px',padding:'2px'}} ><NavLink className={DDCSS.dropDownItem} to="/favorites?source=b2">Booked Tours
       </NavLink></li>
        {bookedToursLength > 0 && (
          <><div className={DDCSS.tooltiptexT}>
           
          </div>
         
         </>
        )} 
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
