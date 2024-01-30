// ProfileView.js

import React from 'react';
import './ProfileView.css'; // Make sure to import your stylesheet
import userPhoto from '../../Assets/profile.png';

const ProfileView = () => {
  return (
    <section>
      <div className='main-profile-section'>
        {/* <div className="user-profile-section">
          <div className="user-profile-photo">
            <img src={userPhoto} alt="User" />
          </div>
          <div className="user-name">Rana Zubair</div>
        </div> */}
        <div className='dp-card'>

        <img src={userPhoto} alt="John" style={{width:"100%"}}/>
  <h1>Zubair</h1>
  <p className="dp-title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <p><button className='dp-button'>Contact</button></p>

        </div>
        <div className='user_profile_form-section'>
          <form>
            <div className="form-column">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>

            <div className="form-column">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>

            <div className="form-column">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-column">
              <label htmlFor="contact">Contact:</label>
              <input type="text" id="contact" name="contact" />
            </div>

            {/* Add more form fields as needed */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileView;
