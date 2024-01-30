// AboutPage.js
import React, { Fragment,useState } from 'react';

import ACss from '../../Assets/styles/AboutCss.module.css'



const UAbout = ({fromSignUp,customProp}) => {

  const [fromAbout,setFromAbout] = useState(true);
 
  return (
    

    
      
     

    <Fragment>
         
       
          
      <div className={ACss.aboutDetails}>
        <h4>About us</h4>
        <div className={ACss.insideAbout}>
        <pre>At Adventure Ace, we believe in transforming ordinary journeys into extraordinary experiences. Our passion for exploration and commitment to providing unparalleled adventures have fueled the creation of Adventure Ace Tour Management System. We are not just a tour agency; we are your companions in crafting memorable journeys that last a lifetime.
          <br /><b>What Sets Us Apart</b><br />
Personalized Experiences: We don't believe in one-size-fits-all. Our tours are crafted with a personal touch, ensuring that each adventure aligns with your interests, preferences, and aspirations.

Expert Guidance: Our seasoned guides and travel experts are dedicated to providing you with insightful information, local knowledge, and ensuring your safety throughout your journey.

Unforgettable Destinations: From taking landscapes to hidden gems off the beaten path, Adventure Ace takes you to destinations that captivate the soul and ignite the spirit of adventure.
<br /><b>Our Mission</b><br/>
Adventure Ace Tour Management System is on a mission to inspire, connect, and empower individuals to explore the world. We aim to be your trusted partner in unlocking the wonders of the globe, fostering appreciation for diverse cultures, nature, and the joy of travel.
<br/><b>Join Us on the Adventure</b><br/>
Embark on a journey with Adventure Ace, where each step is a new discovery, and every moment is an opportunity for adventure. Let's create memories that transcend time and leave an indelible mark on your heart.

Thank you for choosing Adventure Ace Tour Management System – Your Gateway to Extraordinary Adventures!
</pre>
        </div>
      </div>
    </Fragment>
  );
};

export default UAbout;
