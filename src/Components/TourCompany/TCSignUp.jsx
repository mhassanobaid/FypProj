import React, { useState } from 'react';
import NotificationUI from "../Common/NotificationUI";
import logo from "../../Assets/logo.png";
import * as Components from "../Common/Components";
import ImageSlideshow from "../Common/ImageSlideshow";

import Footer from "../Common/Footer";
function TCSignUp() {

  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);
  const [showNotificationc, setShowNotificationc] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationc = () => {
    setShowNotificationc(false);
  };
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };

  const hideNotificationb = () => {
    setShowNotificationb(false);
  };

  const [formData, setFormData] = useState({
    companyName: '',
    companyCNIC: ''
  });

  const uploadFile = async () => {
    const fileInput = document.getElementById('ajaxfile');
    const formDataToSend = new FormData();
    formDataToSend.append('file', fileInput.files[0]);
    console.log(formData.companyName);
  console.log(formData.companyCNIC);
  formDataToSend.append('companyName', formData.companyName);
  formDataToSend.append('companyCNIC', formData.companyCNIC);


  if (!formData.companyName) {
    setShowNotification(true);
   
    return;
  }

  if (formData.companyCNIC.length !== 13) {
    setShowNotificationa(true);
    return;
  }

  if (!fileInput.files[0]) {
    setShowNotificationb(true);
    return;
  }
    try {
      await fetch('http://localhost:8199/ppppp/TCSignUp', {
        method: 'POST',
        body: formDataToSend
      });
      setShowNotificationc(true);
      setFormData({ companyName: '', companyCNIC: '' });
      fileInput.value = ''; // Reset file input
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const btSt = {
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#1172D4',
    color: 'white',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
    cursor: 'pointer'
  };

  const btHoverSt = {
    color: '#ff4b2b',
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    fontSize: '11px',
    border: '1px solid #ff4b2b'
  };
  return (
    <div>
        {showNotificationc && (
      <NotificationUI
        message="Request Send you will soon confirmation message"
        onHide={hideNotificationc}
        position="fixed"
        left="700px"
        top="163px"
        zIndex="100000"
      />
    )}
 {showNotification && (
      <NotificationUI
        message="Please enter Company Name"
        onHide={hideNotification}
        position="fixed"
        left="700px"
        top="163px"
        zIndex="100000"
      />
    )}
     {showNotificationa && (
      <NotificationUI
        message="Please enter Company CNIC"
        onHide={hideNotificationa}
        position="fixed"
        left="700px"
        top="163px"
        zIndex="100000"
      />
    )}
      {showNotificationb && (
      <NotificationUI
        message="Please upload company documents"
        onHide={hideNotificationb}
        position="fixed"
        left="700px"
        top="163px"
        zIndex="100000"
      />
    )}
<Components.SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </Components.SlideShowContainer>
      <Components.TourDetLogo>
        <img src={logo} alt="" />
      </Components.TourDetLogo>
 
      <Components.Container top={16} width={500} right={-700}>      
          <div style={{position:'relative',left:'50px',top:'30px'}}>
            <h2>Sign Up as Tourist Company</h2> <input
        type="text"
        placeholder="Enter Tour Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        style={{
          backgroundColor: '#eee',
          border: 'none',
          padding: '15px',
          margin: '8px 0',
          width: '50%'
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Company CNIC"
        name="companyCNIC"
        value={formData.companyCNIC}
        onChange={handleInputChange}
        style={{
          backgroundColor: '#eee',
          border: 'none',
          padding: '15px',
          margin: '8px 0',
          width: '50%'
        }}
      />
      <br />
      <p style={{margin:'0px',padding:'0px',fontWeight:'bold'}}>Upload company documents for approval</p>
      <input id="ajaxfile" type="file" style={{margin: '8px 0'}} /> <br />
      <div style={{marginTop:'50px',marginLeft:'100px'}}><Components.Button onClick={uploadFile}>Submit</Components.Button></div>
      </div>
      </Components.Container>
      <Footer Top={95} />
    </div>
  );
}

export default TCSignUp;
