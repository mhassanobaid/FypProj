import React, { useState, useEffect } from 'react';
import bigm from '../../Assets/images/sgnUp2a.jpg';

import bigmn from '../../Assets/images/road1.jpg';


const ImageSlideshow = ({ interval = 50 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    bigm,
    
    bigmn
    // Add more image imports as needed
  ];

  const slideStyle = {
 
    backgroundImage:`url(${images[currentIndex]})`,
    width:"100%",
    height:"100%",
    
    backgroundPosition: "center",
    backgroundSize:"cover"
    
  }
  const sliderStyle = {
    height:"100%",
    position: "relative"
  }




  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, images, interval]);

  return (
    <div style={sliderStyle}>
      <div style={slideStyle}>

      </div>
    </div>
  );
};

export default ImageSlideshow;
