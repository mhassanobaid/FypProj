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

const TManageProf = () => {
  const { user, updateUser } = useUser();
  
  const navigate = useNavigate();
  const [name, setName] = useState(user?.username || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [email, setEmail] = useState(user?.email || '');
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);
  const [changePsd, setChangePsd] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!user || !user.selectedTour) {
      navigate('/');
    } else {
      // Set initial values from user context
      setName(user.username || '');
      setPhoneNumber(user.phoneNumber || '');
      setEmail(user.email || '');
    }
  }, [user, navigate]);

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

  const handleSubmit = () => {
    // Call API to update user profile

  
    let emailInput = document.querySelector('#email');
    let Email = emailInput ? emailInput.value : '';
    let phoneNo = document.querySelector('#phone');
    let pNo = phoneNo?phoneNo.value:'';
  

    const updatedUser = { ...user };
    
    updatedUser.email = Email;
    updatedUser.phoneno = pNo;
      updateUser({ ...user,  pNo, email });
      setUpdateSuccess(true);
      setShowUpdateFields(false);
      setShowNotification(true);
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
  
      <div style={{position:'absolute',left:'400px',top:'180px',width:'500px',height:'430px',border:'1px solid grey'}}><h2 style={{textDecoration:'underline',textDecorationColor:'#1174D4',marginLeft:'16px'}}>Manage Profile</h2>
      {!showUpdateFields && !changePsd && (
        <Button style={{marginLeft:'150px',marginTop:'100px'}}onClick={handleUpdateProfile}>Update Profile</Button>
      )}
      </div>
      {showUpdateFields && (
        <div style={{ width: '400px', height: '300px', padding: '15px', overflow: 'auto',position:'absolute',left:'450px',top:'230px' }}>
          <p>Enter new Email</p>
          <Input
            type="email"
            paddingTB={10}
            paddingLR={10}
            id="email"
            placeholder= {email}
            value={email}
            wid={350}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Enter new Phone Number</p>
          <Input
            type="tel"
            placeholder={phoneNumber}
            id="phone"
            value={phoneNumber}
            paddingTB={10}
            paddingLR={10}
            wid={350}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button onClick={handleSubmit} style={{marginTop:'15px',marginLeft:'8px'}}>Submit</Button>
          <Button onClick={handlePsdChange} style={{marginTop:'15px',marginLeft:'10px'}}>Change Password</Button>

          
        </div>
      )}
      
        
      
      {showNotification && <NotificationUI message="_('_')_Email and Phone Number Changed successfully" onHide={hideNotification} position="fixed" left="700px" top="160px"/>
      }
     <Button style={{position:'absolute',top:'540px',left:'529px'}} onClick={handleMoveToDashboard}>Move to Dashboard</Button>
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