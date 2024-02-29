// ProfileView.js

import React, { useState } from 'react';
import './ProfileView.css'; // Make sure to import your stylesheet
import userPhoto from '../../Assets/images/profile.png';
import zub from '../../Assets/images/zub.jpg';
import hamza2 from '../../Assets/images/hamza2.jpeg';
import UserChar from './UserChar';

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
      <div className='main-profile-section'>
        <div className='dp-card'>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id='uploadProfilePicture'
          />
          <label htmlFor='uploadProfilePicture'>
            <img
              src={hamza2} // Provide a default image URL
              alt='User'
              className='user-profile-photo'
            />
          </label>
          <h1>Zubair</h1>
          <h3>mzubair645@gmail.com</h3>
          <h3>03044585007</h3>
          <p className='dp-title'>CEO & Founder, Example</p>
          <p>
            <button className='dp-button'>Contact</button>
          </p>
        </div>
        <div className='user_profile_form-section'>
          <UserChar/>
        </div>
      </div>
    </section>
  );
};

export default ProfileView;
