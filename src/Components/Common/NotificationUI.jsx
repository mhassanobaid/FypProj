import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledNotificationBanner = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  //position:absolute;
  position: ${props => props.position}; 
  /* left: 50%; 
  top: 150px; */
  left: ${props => props.left}; /* Use props to set left position */
  top: ${props => props.top};
  transform: translateX(-50%);
  font-weight: bold;
  z-index: ${props => props.zIndex};
`;

const NotificationUI = ({ message, onHide,position ,left,top,zIndex,duration }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, duration || 4000); // Hide after 4 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onHide]);

  return (
    <StyledNotificationBanner position={position} left={left} top={top} zIndex={zIndex}>
    {message}
  </StyledNotificationBanner>
  );
};

export default NotificationUI;