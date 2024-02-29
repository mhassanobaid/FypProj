// ProfileView.js

import React, { useState } from 'react';
import p from'./TCProfileView.module.css'; // Make sure to import your stylesheet
import userPhoto from '../../Assets/profile.png';
import zub from '../../Assets/zub.jpg';
import hamza2 from '../../Assets/hamza2.jpeg';
import TCUserChar from './TCUserChar';

const ProfileView = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Perform additional checks if needed
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfilePicture(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Mock data for UserBookingChart (replace with actual data)
 
  return (
    <section>
      <div className={p.pmain_profile_section}>
        <div className={p.pdp_card}>
        
          <label htmlFor='puploadProfilePicture'>
            <img
              src={hamza2} // Provide a default image URL
              alt='User'
              className={p.puser_profile_photo}
            />
          </label>
          <h1>Zubair</h1>
          <h3>mzubair645@gmail.com</h3>
          <h3>03044585007</h3>
          <p className={p.pdp_title}>CEO & Founder, Example</p>
          <p>
            <button className={p.pdp_button}>Contact</button>
          </p>
        </div>
        <div className={p.puser_profile_form_section}>
          <TCUserChar/>
        </div>
      </div>
    </section>
  );
};

export default ProfileView;
