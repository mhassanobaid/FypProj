import React, { useState,useEffect } from 'react';
import { TourDetailDv,OuterTourDet,TourDetImg,TourDetLogo,Button,Input,SlideShowContainer,TourCompanyInfo,Roomicon,Roomicon1,BookingDet } from '../../Components/Common/Components';
import { useUser } from '../../Components/User/UserContext';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import logo from '../../Assets/images/logo.png';
import LinkList from '../../Components/Common/LinkList';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Common/Footer';
import NotificationUI from '../../Components/Common/NotificationUI';
import wImg from '../../../src/Assets/images/welcomeIcon.png';
const TManageProf = () => {
  const { user, updateUser } = useUser();
  const loc = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      window.location.href = '/';
    } else {
      // Set initial values from user context
      console.log('das');
      setName(user?.username || '');
      setPhoneNumber(user?.phoneno || '');
      setEmail(user?.email || '');
    }
  }, [user, navigate,loc.state]);
  const [name, setName] = useState(user?.username || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [email, setEmail] = useState(user?.email || '');
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);
  const [changePsd, setChangePsd] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 

  const hideNotification=()=>{
    setShowNotification(false);
  }
  const hideNotificationb=()=>{
    setShowNotificationb(false);
  }
  const handleUpdateProfile = () => {
    setShowUpdateFields(true);
   console.log(user.username+user.email+user.phoneNumber);
  };

  const handleSubmit = async () => {
    // Call API to update user profile
    if (!email || !password) {
      setErrorMessage('Email and password fields cannot be empty.');
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid Gmail address.');
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Please enter a valid Gmail address.');
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }
       let usrid = user.id;
     console.log("Me handble submit me hn usr entered\n"+email+password);
    try {
      const response = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, usrid,action: "manageProfile" }),
      });

      if (response.ok) {
        updateUser((prevUser) => ({
          ...prevUser,
          email: email,
        }));

        //alert("Profile updated successfully");
        setErrorMessage('Email and Password Changed Successfully');
        
        setTimeout(() => {
          setErrorMessage('');
        }, 4000);

        setTimeout(() => {
          navigate("/"); // Navigate to the landing page
        }, 5000);

        //navigate("/"); // Navigate to the landing page
    } else {
        const result = await response.text();
        if (response.status === 400 ) {
          setErrorMessage(result);
          setTimeout(() => {
            setErrorMessage('');
          }, 4000);
        } else {
            console.error("Error: Failed to send data");
        }
    }
    } catch (error) {
      console.error("Error:", error);
    }
      // updateUser({ ...user,  pNo, email });
      // setUpdateSuccess(true);
      // setShowUpdateFields(false);
      // setShowNotification(true);
  };
  const setPsdd=()=>{
    let psdd = document.querySelector('#psd');
    let pSds = psdd?psdd.value:'';
    const updatedUser = { ...user };
    updatedUser.psd = pSds;
    updateUser({ ...user,pSds   });

    
  }
  const handlePsdChange=()=>
  {
    setShowUpdateFields(false);
    setChangePsd(true);
  }

  const handleMoveToDashboard = () => {
    navigate('/');
  };
  const mD={
   marginLeft:'39%',
   marginTop:'26%'
    
  }
const handleCfrm=()=>{
  let psdd = document.querySelector('#psd');
  let pSds = psdd?psdd.value:'';
  const updatedUser = { ...user };
  updatedUser.psd = pSds;
  updateUser({ ...user,pSds   });
  setChangePsd(false);
  setShowUpdateFields(false);
  setShowNotificationb(true);
}
  return (
    <div>
      <TourDetLogo>
<img src={logo} alt="" /></TourDetLogo>

<SlideShowContainer>
  <ImageSlideshow interval={2000} />
  </SlideShowContainer>
  <LinkList  />
  {errorMessage && (
        <p style={{ color: 'red',position:'absolute',top:'235px',left:'405px',fontWeight:'bold',fontSize:'24px', whiteSpace: 'nowrap',zIndex:'20000' }}>{errorMessage}</p>
      )}
      <div><img src={wImg} alt="" width={'100px'} style={{position:'absolute',left:'520px',top:'190px'}} /></div>
      <h4 style={{fontFamily:'Roboto',textAlign:'center',fontSize:'28px'}}>{user.username}</h4>    
      <div style={{position:'absolute',left:'400px',top:'180px',width:'500px',height:'450px',border:'1px solid grey'}}><h2 style={{textDecoration:'underline',textDecorationColor:'#1174D4',marginLeft:'-200px',marginBottom:'40px'}}>Manage Profile</h2>
      {!showUpdateFields && !changePsd && (
        <Button style={{marginLeft:'150px',marginTop:'100px'}}onClick={handleUpdateProfile}>Update Profile</Button>
      )}
      </div>
      {showUpdateFields && (
        <div style={{position:'absolute',left:'450px',top:'280px'}}>
        <p style={{fontWeight:'bold'}}>Enter new Email</p>
        <Input
          type="email"
          paddingTB={8}
          paddingLR={10}
          id="email"
          placeholder='Enter new Email'
          
          wid={350}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{fontWeight:'bold'}}>Enter new Password</p>
        <Input
          type="password"
          id="password"
          value={password}
          paddingTB={8}
          paddingLR={10}
          wid={350}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} style={{ position:'absolute',left:'100px',top:'220px' }}>
          Submit
        </Button>
      </div>
      )}
      
        
      
      {showNotification && <NotificationUI message="_('_')_Email and Phone Number Changed successfully" onHide={hideNotification} position="fixed" left="700px" top="160px"/>
      }
     <Button style={{position:'absolute',top:'570px',left:'529px'}} onClick={handleMoveToDashboard}>To Dashboard</Button>
      {changePsd && (<div style={{position:'absolute',left:'450px',top:'230px'}}>
        <p>Enter new Password</p>
        <Input
          type="password"
          paddingTB={10}
          paddingLR={10}

          value={password}
          wid={350}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <p>Confirm new Password</p>
        <Input
          type="password"
          paddingTB={10}
          paddingLR={10}
          id="psd"
          value={password}
          wid={350}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <Button style={{position:'absolute',left:'90px',top:'240px'}} onClick={handleCfrm}>Confirm Change</Button>
       
      </div>)}
      {showNotificationb && (<><NotificationUI message="_('_')_Password Changed successfully" onHide={hideNotificationb} position="fixed" left="700px" top="160px" /></>)}
    </div>
  );
};

export default TManageProf;