// TourCard.js
import { React, useState } from "react";
import TCCss from "../User/TourCardCss.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../User/UserContext";
import NotificationUI from "../Common/NotificationUI";

const TourCard = ({ naam, image, location, price, tourists, tourss, tId,departureDate,description }) => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);
  const { updateUser } = useUser();
  const { user } = useUser();

  const [showNotification, setShowNotification] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };

  const handleAnchorClick = (event) => {
    console.log(image);
    // Navigate to TourDetails page with the selected tourId
    if (user) {
      const updatedUser = { ...user };
      updatedUser.selectedTour = Array.isArray(updatedUser.selectedTour) ? updatedUser.selectedTour : [];
      updatedUser.selectedTour.push({
        naam,
        image,
        location,
        price,
        tourists,
        tId,
        description,
        departureDate
      });
      
      
      console.log(user.bookedTours.length);
      console.log(user);
    } else {
      alert("Please login first");
    }
    // Navigate to TourDetails page with the selected tourId

    navigate("/tourdet", { state: { TourId: tId, Tours: tourss } });
  };

  const handleFavoriteClick = (event) => {
    // Update the user state to add the current tour card to bookedTours
    event.stopPropagation();
    if (user) {
      const updatedUser = { ...user };
      updatedUser.favorites = updatedUser.favorites ?? [];
      const isTourAlreadyAdded = updatedUser.favorites.some((tour) => tour.tId === tId);
      console.log(isTourAlreadyAdded);
      if(!isTourAlreadyAdded){
      updatedUser.favorites.push({
        naam,
        image,
        location,
        price,
        tourists,
        tId,
        description,
        departureDate
      });
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
      alert("Please login first");
    }
  };

  return (
    <div className={TCCss.tourCard}>
           {showNotification&& (<NotificationUI message="Tour already added to Favorite." onHide={hideNotification} position="fixed" left="700px" top="25px"  />)}
      <a className={TCCss.hyp} onClick={handleAnchorClick}>
        <div className={TCCss.divInsideA}>
          <img src={image} alt="Tour" className={TCCss.TourImage} />
          <div className={TCCss.tourDetails}>
            <div className={TCCss.flexContainr}>
              <h3>{naam}</h3>
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
              <div className={TCCss.dataComingToCard}>{tourists}</div>
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
