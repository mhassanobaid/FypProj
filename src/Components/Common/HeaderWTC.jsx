import React from 'react';
import { HeaderForContAb,videoOverlay } from './Components'; // Adjust the path
import LinkList from './LinkList';
const HeaderWTC = ({forSU})=>{
            
  return(

    <HeaderForContAb fullScreen={forSU} fullWidth={forSU}>
    {/* Include your video and other components here */}
    <video autoPlay loop muted playsInline >
      <source src="/videos/header-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <LinkList />
  </HeaderForContAb>

  );

}
export default HeaderWTC;



