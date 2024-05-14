import React, { useState, useEffect } from "react";

import * as Components from "../../Components/Common/Components";
import { useNavigate } from "react-router-dom";
import { user, useUser } from "../../Components/User/UserContext";
import { useLocation } from "react-router-dom";
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../Assets/images/logo.png";
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import SUCss from "../../Assets/styles/SignUpCss.module.css";
import bgImg from "../../Assets/images/sgnUp2.jpg";

import { useHistory } from "react-router-dom";

import logoo from "../../Assets/images/logo.png";
import LinkList from "../../Components/Common/LinkList";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HeaderWTC from "../../Components/Common/HeaderWTC";
import ImageSlideshow from "../../Components/Common/ImageSlideshow";
import Footer from "../../Components/Common/Footer";
import NotificationUI from "../../Components/Common/NotificationUI";

const SignUp = (onViewChange) => {
  const location = useLocation();
  

  let isLogin = new URLSearchParams(location.search).get("login");
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);
  let [signIn, toggle] = React.useState(false);
  const countriess = [
    {name: "Pakistan", code: "+92"},
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    // Add more countries as needed
  ];
  const [selectedCountry, setSelectedCountry] = useState(countriess[0]);
  const [phoneNumber, setPhoneNumber] = useState(+92);
  const [errorMessag, setErrorMessag] = useState('');
  // console.log('HEER'+isLogin);

  useEffect(() => {
    // Toggle signIn state based on isLogin value
    if (isLogin) {
      toggle(true);
    } else toggle(false);
  }, [isLogin]);
  const [formData, setFormData] = useState({
    // Define your form fields here
    // Example:
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    selectedCountry: countriess[0],
  });
  useEffect(() => {
    const formattedPhoneNumber = formData.phone.trim();
    const selectedCode = formData.selectedCountry.code;
    const existingCode = formData.phone.split(' ')[0];
    const defaultPhoneNumber = `${formData.selectedCountry.code} ${formData.phone.replace(/^\s*|\s*$/g, '')}`;
    if (!formData.phone.startsWith(formData.selectedCountry.code)) {
      setFormData(prevState => ({ ...prevState, phone: defaultPhoneNumber }));
    }
  }, [formData.selectedCountry]);

  
  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };
  const hideNotificationb = () => {
    setShowNotificationb(false);
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrorMessage = '';
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !phoneNumber) {
      newErrorMessage = 'All fields are required.';
    } else {
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(formData.firstname) || !nameRegex.test(formData.lastname)) {
        newErrorMessage = 'Name fields should not contain special characters or numbers.';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrorMessage = 'Please enter a valid email address.';
        } else {
          if (formData.password.length < 8) {
            newErrorMessage = 'Password should be at least 8 characters long.';
          } else {
            const phoneRegex = /^\+?\d*$/;
            if (!phoneRegex.test(phoneNumber)) {
              newErrorMessage = 'Phone number should contain only digits.';
            }
          }
        }
      }
    }

    setErrorMessag(newErrorMessage);
    if (!newErrorMessage) {
    try {                            
      const response = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, action: "signup" }), // Adding action property
      });
    
      if (response.ok) {
        console.log("Success: Data sent successfula");
        let userSesId;
    try{
      const responsee = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "checkUserId" }),
            
            
      }); // Adding action property
      if(responsee.ok)
      { 
        const userRc = await responsee.json();
        userSesId = userRc[userRc.length - 1].id;
      }
      

    }catch(error)
    {
      console.error("Error:", error);
    }
        let fulname = formData.firstname + " " + formData.lastname;
        updateUser({
          id:userSesId,
          username: fulname,
          email: formData.email,
          psd: formData.password,
          phoneno: formData.phone,
          bookedTours: [],
          favorites: [],
          selectedTour: [],
        });
        console.log(fulname);
        console.log("ME form ke fieds hun"+formData);
        console.log("USER SESSIOM<>--:-__-:--\n"+JSON.stringify(user));
        navigate("/");
      } else {
        console.error("Error: Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  else
  {
    setTimeout(() => {
      setErrorMessag('');
    }, 4000);
  }
  };
  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
   if(validateForm()){
     if(formData.email == 'admin@example.com' && formData.password=='12345678')
      {
        navigate("/adminHome");
        return;
        
       }
    try {
      const response = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, action: "login" }), // Adding action property
      });
    
      if (response.ok) {
        console.log("Successed: Logged in successfullydadas");

        try {
          const userData = await response.json();
          console.log("RESPONSE IN JSON:--__--"+userData);
          // console.log(userData.userType+"\n");
          let fulname = userData.firstName + " " + userData.lastName;
          console.log("fill name:---"+fulname);
          updateUser({
            id: userData.id,
            username: fulname,
            email: userData.email,
            psd: userData.password,
            phoneno: userData.phoneNo,
            bookedTours: [],
            favorites: [],
            selectedTour: [],
          });
          console.log("USER SESSION:--__--"+JSON.stringify(user));
          navigate("/");
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
        }
        // Handle successful login
      } else {
        const errorMessage = await response.text();
        setShowNotificationa(true);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  else{

  }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeP = (e) => {
    setPhoneNumber(e.target.value); // Update the phone number as the user types
  };
  const handleCountryChange = (e) => {
    const selectedCountry = countriess.find(country => country.name === e.target.value);
    //const formattedPhoneNumber = `${selectedCountry.code} ${formData.phone.replace(/^\s*|\s*$/g, '')}`;
//    setFormData({ ...formData, selectedCountry });
    setSelectedCountry(selectedCountry);
    setPhoneNumber(selectedCountry.code);
  };
  const formatPhoneNumber = (phoneNumber, countryCode) => {
    // Remove any whitespace from phone number
    const formattedPhoneNumber = formData.phone.trim();
    // Replace the country code in the phone number with the newly selected country code
    return formattedPhoneNumber.replace(/^\+\d+/, countryCode);
  };


  return (
    <div className={SUCss.body}>
       {errorMessag && (
        <p style={{ color: 'red',position:'absolute',top:'160px',left:'690px',fontWeight:'bold',fontSize:'20px', whiteSpace: 'nowrap',zIndex:'10000' }}>{errorMessag}</p>
      )}    
      {showNotification && (
        <NotificationUI
          message="Tour already added to Favorite."
          onHide={hideNotification}
          position="fixed"
          left="700px"
          top="25px"
        />
      )}
         {showNotificationa && (
        <NotificationUI
          message="Incorrect Email or password"
          onHide={hideNotificationa}
          position="fixed"
          left="700px"
          top="160px"
          zIndex={200000}
        />
      )}
       {showNotificationb && (
        <NotificationUI
          message="Form not filled properly"
          onHide={hideNotificationb}
          position="fixed"
          left="700px"
          top="160px"
          zIndex={200000}
        />
      )}
      {/* <HeaderWTC forSU={true} fullWidth={true}/> */}

      <Components.SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </Components.SlideShowContainer>
      <Components.TourDetLogo>
        <img src={logo} alt="" />
      </Components.TourDetLogo>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Components.Container>
          {signIn ? (
            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Sign in</Components.Title>
                <div style={{ position: 'relative' }}>
      <EmailIcon style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-70%)' }} fontSize="small" />
      <Components.Input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      {errors.email && <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '25px',fontSize:'15px' }}>{errors.email}</span>}
    </div>

    <div style={{ position: 'relative' }}>
      <PasswordIcon style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-70%)' }} fontSize="small" />
      <Components.Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      {errors.password && <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '25px',fontSize:'15px' }}>{errors.password}</span>}
    </div>
                <Components.Anchor href="#">
                  Forgot your password?
                </Components.Anchor>
                <Components.Button onClick={handleSignIn}>
                  Sign In
                </Components.Button>
              </Components.Form>
            </Components.SignInContainer>
          ) : (
            <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Create Account</Components.Title>
                     
                <PersonIcon style={{position:'absolute',left:'30px',top:'145px'}} fontSize="small"/>
                <Components.Input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                />
                
                <PersonIcon style={{position:'absolute',left:'30px',top:'84px'}} fontSize="small"/>
                <Components.Input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                />
                 
                <EmailIcon style={{position:'absolute',left:'30px',top:'195px'}} fontSize="small"/>
                <Components.Input
                  type="email"
                  placeholder="Email"
                  
                  name="email"
                  onChange={handleChange}
                />
            
                
                <PasswordIcon style={{position:'absolute',left:'30px',top:'250px'}} fontSize="small"/>
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              
                
                <PhoneIcon style={{position:'absolute',left:'30px',top:'320px'}} fontSize="small"/>
                <select value={selectedCountry.name} onChange={handleCountryChange} style={{position:'relative',top:'1px',left:'-50px',width:'107px'}}>
        {countriess.map((country, index) => (
          <option key={index} value={country.name}>{`${country.name} ${country.code}`}</option>
        ))}
      </select>
                <Components.Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={phoneNumber}
                  onChange={handleChangeP}
                />
              
                <Components.Button onClick={handleSubmit}>
                  Sign Up
                </Components.Button>
              </Components.Form>
            </Components.SignUpContainer>
          )}

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome User!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => {
                    toggle(true);
                  }}
                >
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              
              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, User!</Components.Title>
                <Components.Paragraph>
                  Enter Your personale details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
      <Footer Top={95} />
    </div>
  );
};

export default SignUp;
