// TourCard.js
import { React, useState, useEffect } from "react";
import TCCss from "../User/TourCardCss.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../User/UserContext";
import NotificationUI from "../Common/NotificationUI";
import { selectClasses } from "@mui/material";


const TourCard = ({ title, image_url, location, price, number_of_persons, tourss, tourid,departure_date,descreption,company_id,number_of_days }) => {
  
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);
  const { updateUser } = useUser();
  let { user } = useUser();

  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };
  const hideNotificationb = () => {
    setShowNotificationb(false);
  };
  // useEffect(() => {
  //   // Convert BLOB data to URL
  //   if (image) {
  //     const blobUrl = URL.createObjectURL(new Blob([image]));

  //     setImageUrl(blobUrl);
  //     console.log(blobUrl);
  //   }

  //   // Clean up by revoking the URL when component unmounts
  //   return () => {
  //     if (imageUrl) {
  //       URL.revokeObjectURL(imageUrl);
  //     }
  //   };
  // }, [image]);

  const handleAnchorClick = (event) => {

    console.log(image_url);
    console.log("Me in ANchor of tour Card(*_*)-"+tourid);
       
  
    // Navigate to TourDetails page with the selected tourId
    if (user) {
      
       user = { ...user };
       user.selectedTour = Array.isArray(user.selectedTour) ? user.selectedTour : [];
       user.selectedTour.push({
        title,
        image_url,
        location,
        price,
        number_of_persons,
        tourid,
        descreption,
        departure_date,
        company_id

      });
      

   
      
      
    } else {
      setShowNotificationa(true);
    }
    // Navigate to TourDetails page with the selected tourId
  console.log("TOURID is "+tourid+"\t");
    navigate("/tourdet", { state: { TourId: tourid, Tours: tourss } });
  };

  const handleFavoriteClick = async(event) => {
    // Update the user state to add the current tour card to bookedTours
    console.log("ME TourCard.jsx me hun aur company_id show kr rhe "+company_id);
    event.stopPropagation();
    if (user) {
      const updatedUser = { ...user };
      updatedUser.favorites = updatedUser.favorites ?? [];
      const isTourAlreadyAdded = updatedUser.favorites.some((tour) => tour.tourid === tourid);
      console.log(isTourAlreadyAdded);
      if(!isTourAlreadyAdded){
        const obj = {   
          userId: user.id,
          title:title,
          image_url:image_url,
          location:location,
          price:price,
          number_of_persons:number_of_persons,
          tourid:tourid,
          descreption:descreption,
          departure_date:departure_date,
          company_id:company_id,
          number_of_days:number_of_days};
        try {                            
          const response = await fetch("http://localhost:8199/ppppp/Demo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...obj, action: "saveFavorite" }), // Adding action property
          });
        
          if (response.ok) {
            updatedUser.favorites.push({
              title,
              image_url,
              location,
              price,
              number_of_persons,
              tourid,
              descreption,
              departure_date,
              company_id,
              number_of_days
            });
          } else {
            console.error("Error: Failed to send data");
          }
        } catch (error) {
          console.error("Error:", error);
        }





      console.log(user);
      updateUser(updatedUser);
      setShowTooltip(true);
      setShowProfileTooltip(true);

      // Hide the tooltip after 3 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);}
      else{
        setShowNotification(true);
        
      }
    } else {
      setShowNotificationb(true);
    }
  };



  return (
    <div className={TCCss.tourCard}>
           {showNotification&& (<NotificationUI message="Tour already added to Favorite." onHide={hideNotification} position="fixed" left="700px" top="25px" zIndex={20000}  />)}
           {showNotificationa && (<NotificationUI message="Please log in First" onHide={hideNotificationa} position="fixed" left="700px" zIndex={20000} top="25px"  />)}
           {showNotificationb && (<NotificationUI message="Please log in First" onHide={hideNotificationb} position="fixed" left="700px" zIndex={20000} top="25px"  />)}
      <a className={TCCss.hyp} onClick={handleAnchorClick}>
        <div className={TCCss.divInsideA}>
          
          <img src={image_url} alt="Tour" className={TCCss.TourImage} />
          <div className={TCCss.tourDetails}>
            <div className={TCCss.flexContainr}>
              <h3>{title}</h3>
              <a onClick={handleFavoriteClick}>
                <div class={TCCss.fvtIcn}>
                  <FavoriteIcon fontSize="large" />
                </div>
              </a>
            </div>

            <p>
              <div class={TCCss.insidecardtext}>Location:</div>
              <div className={TCCss.dataComingToCard}>{location}</div>
            </p>
            <p>
              <div class={TCCss.insidecardtext}>Price per tourist $ &nbsp;&nbsp;:</div>
              <div className={TCCss.dataComingToCard}>{price}</div>
            </p>
            <p>
              <div class={TCCss.insidecardtext}>Tourists:&nbsp;</div>
              <div className={TCCss.dataComingToCard}>{number_of_persons}</div>
            </p>
          
            {showTooltip && (
              <div className={TCCss.tooltip}>Tour Added to Favorite</div>
            )}
          
          </div>

        </div>
      </a>
 
    </div>
  );
};

TourCard.propTypes = {
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tourists: PropTypes.number.isRequired,
};

export default TourCard;
