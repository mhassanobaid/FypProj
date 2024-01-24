// TourCard.js
import React from 'react';
import '../LandingPage/TourCardCss.css';
import PropTypes from 'prop-types';


const TourCard = ({ naam,image, location, price, tourists }) => {
  return (
    <div className="tour-card">
      <img src={image} alt="Tour" className="tour-image" />
      <div className="tour-details">
        <h3>{naam}</h3>
        
        <p><div class="inside-card-text">Location:</div><div className='data-coming-to-card'>{location}</div></p>
        <p><div class="inside-card-text">Price $ &nbsp;&nbsp;:</div><div className='data-coming-to-card'>{price}</div></p>
        <p><div class="inside-card-text">Tourists:&nbsp;</div><div className='data-coming-to-card'>{tourists}</div></p>
      </div>
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
