// ContactDetails.js
import React, { Fragment } from 'react';
import ACss from '../../Assets/styles/ContactCss.module.css'
const UContact = () => {

  

  return (
    <Fragment >
      <div className={ACss.contactDetails}><h4>Contact Details</h4>
      <div className={ACss.insideContact}><p><div className={ACss.txtInCont}>Email: </div>aatm@email.com</p>
      <p><div className={ACss.txtInCont}>Phone: </div>+92 311 113 012 4</p></div>
      </div>
    </Fragment>
  );
};

export default UContact;
