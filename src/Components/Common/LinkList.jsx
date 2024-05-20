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
  const [favoriteToursLength, setFavoriteToursLength] = useState(0);
  const [bookedToursLength, setBookedToursLength] = useState(0);
  const toggleOptions = () => {
    setOptionsVisible((prevVisible) => !prevVisible);
  };

  const fetchBookdTours = async () => {
    
    try {
      const requestBodye = { action: "retrieveBookdTours", userId: user.id };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBodye), // Sending action of 'retrieveTours'
      });
       console.log("RESPONSE IS :-"+response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursDatae = await response.json();
          console.log("LINK LIST BOOKED TOUR FETCH ME HUN\n");
          //console.log(toursDatae);
          console.log("\n");
       
 
          const modifiedToursDatae = toursDatae.map(tour => ({
            userid: tour.user_id,
            tourid: tour.tour_id,
            title: tour.title,
            location: tour.location,
            image_url: tour.image_url,
            tourists_going: tour.tourist_going,
            total_amount: tour.price,
            departure_date: tour.departure_date,
            bookedAt: tour.booked_at,
            price: tour.price_per_tourist,
            number_of_days: tour.price_per_tourist               
            // Add more custom key-value pairs as needed
          }));
          updateUser({ ...user, bookedTours: modifiedToursDatae });
          // updateUser(updatedUser);
          //console.log("array of booked rha hun me\n");
          
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

  
  // useEffect(()=>{
  //                   if(user){
                      
  //                       fetchBookdTours();
                      
  //                   }
  // },[]);
 // Trigger effect whenever the length of bookedTours changes
 useEffect(() => {
 
  setBookedToursLength(user?.bookedTours.length || 0);
  setFavoriteToursLength(user?.favorites.length||0);
}, [user]);

 
  
  



  return (
    <div className={LLCss.contentLink}>
      {bookedToursLength > 0 && (
          <>
          <div className={LLCss.notificationCircle}></div>
           <NotificationsActiveIcon style={{ left: '595px', color: 'black',position:'absolute',top:'5px',zIndex:'10000' }} /></>
        )}
         
      <nav >
        <ul >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/signup">SignUp</NavLink></li>
          {/* <li><NavLink to="/wese">Wese</NavLink></li> */}
          <li><NavLink to="/signup?login=true">Log In</NavLink></li>
          {auth && (<div className={LLCss.lli}>
            <li onClick={toggleOptions}>

              <AccountCircleIcon fontSize="large" style={{ backgroundColor: 'white', zIndex: '200px' }} />
             
              </li>
              
            <p>{usernamE}</p>
            {/* {BookedToursLength > 0 && <div className={LLCss.tooltiptext}></div>} */}
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
