// TourCard.js
import React from 'react';
import TCCss from '../User/TourCardCss.module.css';
import PropTypes from 'prop-types';


const TourCard = ({ naam,image, location, price, tourists }) => {
  return (
    <div className={TCCss.tourCard}>
      <a href="#">
        <div className={TCCss.divInsideA}>
      <img src={image} alt="Tour" className={TCCss.TourImage} />
      <div className={TCCss.tourDetails}>
        <h3>{naam}</h3>
        
        <p><div class={TCCss.insidecardtext}>Location:</div><div className={TCCss.dataComingToCard}>{location}</div></p>
        <p><div class={TCCss.insidecardtext}>Price $ &nbsp;&nbsp;:</div><div className={TCCss.dataComingToCard}>{price}</div></p>
        <p><div class={TCCss.insidecardtext}>Tourists:&nbsp;</div><div className={TCCss.dataComingToCard}>{tourists}</div></p>
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
