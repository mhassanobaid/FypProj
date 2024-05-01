import React, { useState, useEffect } from "react";
import * as Components from "../../Components/Common/Components";
import { useNavigate } from "react-router-dom";
import { user, useUser } from "../../Components/User/UserContext";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/images/logo.png";

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
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  let [signIn, toggle] = React.useState(false);
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
  });
  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        let fulname = formData.firstname + " " + formData.lastname;
        updateUser({
          id: formData.id,
          username: fulname,
          email: formData.email,
          psd: formData.password,
          phoneno: formData.phone,
          bookedTours: [],
          favorites: [],
          selectedTour: [],
        });
        console.log(fulname);
        console.log(formData);
        console.log("USER SESSIOM<>:-__-"+JSON.stringify(user));
        navigate("/");
      } else {
        console.error("Error: Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

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
                         
          if(userData.userType == 2)
                navigate("/adminHome");   
          else
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={SUCss.body}>
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
                <Components.Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
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
                <Components.Input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                />
                <Components.Input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                />
                <Components.Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <Components.Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
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
