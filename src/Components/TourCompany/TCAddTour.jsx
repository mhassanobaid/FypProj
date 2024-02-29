import React from 'react';
import a from './TCAddTour.module.css';
import hamza2 from '../../Assets/hamza2.jpeg';

const TCAddTour = () => {
  return (
    <>
      <section>
        <div className={a.main_section}>
          <div className={a.title}>
            <h1>Add Tour</h1>
          </div>
     
      
        <div className={a.signup_section}>
          <form className={a.signup_form}>
            <div className={a.form_row}>
              <div className={a.form_group}>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" required />
              </div>
              <div className={a.form_group}>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" required />
              </div>
            </div>
            <div className={a.form_row}>
              <div className={a.form_group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={a.form_group}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
            </div>
            <div className={a.form_row}>
              <div className={a.form_group}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" required />
              </div>
              <div className={a.form_group}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className={a.form_group}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        
    </div>
      </section>
    </>
  );
};

export default TCAddTour;
