// SignUp.js
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
  let rq = -1;
  let isLogin = new URLSearchParams(location.search).get("login");
  const { user, updateUser } = useUser();
  var [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState();
  const [jumpLogin, setJumpLogin] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [currentView, setCurrentView] = useState("tours");
  const userType = "0";
  const [showHeader, setShowHeader] = useState(true);
  const [fromSignUp, setFromSignUp] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const validateUserData = (fullName, email, password) => {
    const isValid =
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      isValidEmail(email) &&
      isValidPassword(password);

    return isValid;
  };

  const validateUserDatae = (email, password) => {
    const isValid =
      email.trim() !== "" &&
      password.trim() !== "" &&
      isValidEmail(email) &&
      isValidPassword(password);

    return isValid;
  };
  const handleSignUp = async () => {
    let FName = document.querySelector('input[name="Fname"]');
    let FirstName = FName ? FName.value : "";
    let LName = document.querySelector('input[name="Lname"]');
    let LastName = LName ? LName.value : "";
    let emailInput = document.querySelector('input[name="email"]');
    let Email = emailInput ? emailInput.value : "";
    let pwdInput = document.querySelector('input[name="password"]');
    let Pwd = pwdInput ? pwdInput.value : "";
    let phoneNo = document.querySelector('input[name="phone"]');
    let pNo = phoneNo ? phoneNo.value : "";
   rq = 0;
    if (!FirstName || !LastName || !Email || !Pwd || !pNo) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate first name and last name (only alphabets)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(FirstName) || !nameRegex.test(LastName)) {
      alert("Please enter a valid first and last name (alphabets only).");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (Pwd.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Validate phone number (only numeric and 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(pNo)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    console.log(FirstName + LastName + Email, Pwd, pNo);

    // Validation passed, continue with sign up process
    const isValid = validateUserData(FirstName, LastName, Email, Pwd, pNo);

    try {
      const response = await fetch(
        "http://localhost:8080/fypPract/SignUpServlet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `FName=${encodeURIComponent(
            FirstName
          )}&LName=${encodeURIComponent(LastName)}&Email=${encodeURIComponent(
            Email
          )}&Password=${encodeURIComponent(Pwd)}&UserType=${encodeURIComponent(
            userType
          )}&Number=${encodeURIComponent(pNo)}&rq=${encodeURIComponent(rq)}`,
        }
      );

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("-][-");
        console.log("Succes");
        // navigate('/Login');

        // if (isValid) {
        //   // Update the user state in the UserContext
        //   let Name = FirstName+LastName;
        //   updateUser({
        //     username: Name,
        //     email: Email,
        //     psd: Pwd,
        //     phoneno: pNo,
        //     bookedTours: [],
        //     favorites: [],
        //     selectedTour: [],
        //   });

        //  navigate("/");

        // } else {
        //   console.error("Invalid user data");
        // }
      } else {
        console.error("Sign Up Failed456");
      }
    } catch (error) {
      console.error("Error:123", error);
      console.log(fullName + email + password);
    }
  };

  const handleSignIn = async () => {
    let emailInput = document.querySelector('input[name="emaile"]');
    let Email = emailInput ? emailInput.value : "";
    let pwdInput = document.querySelector('input[name="passworde"]');
    let Pwd = pwdInput ? pwdInput.value : "";
rq=1;
    if (Email == "" || Pwd == "") {
      alert("Please fill fields");
      return;
    }

    const isValid = validateUserDatae(Email, Pwd);
    
    if (isValid) {
      // Update the user state in the UserContext

      if (Email === "admin@gmail.com" && Pwd === "12345678")
      {  navigate("/admin");}
        try {
          
          const response = await fetch(
            "http://localhost:8080/fypPract/LogInServlet",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `email=${encodeURIComponent(Email)}&password=${encodeURIComponent(Pwd)}&rq=${encodeURIComponent(rq)}}`,
            }
          );
          
          if (response.ok) {
            // Login successful
            // const responseData = await response.json();
            const responseData = await response.json();
            console.log("Login successful:"+responseData);

            updateUser({
              username: Email,
              email: Email,
              bookedTours: [],
              favorites: [],
              selectedTour: [],
            });

            // Redirect the user to the home page or perform other actions

            navigate("/");
          } else {
            // Login failed
            console.error("Login failed");
          }
        } catch (error) {
          console.error("Error:", error);
        }

        // Now, you can navigate to the home page or perform other actions
      
    } else {
      // Handle validation errors
      console.error("Invalid user data");
    }
    //   const cp = document.querySelector('input[name="emaile"]');
    //   setFullName(cp.value);
    //   setAuthenticated(true);
    //   navigate("/home", {state:{userName:cp.value,userAuthenticated:true}});
  };

  let [signIn, toggle] = React.useState(false);
  // console.log('HEER'+isLogin);

  useEffect(() => {
    // Toggle signIn state based on isLogin value
    if (isLogin) {
      toggle(true);
    } else toggle(false);
  }, [isLogin]);

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
                  name="emaile"
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="passworde"
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
                  name="Fname"
                />
                <Components.Input
                  type="text"
                  placeholder="Last Name"
                  name="Lname"
                />
                <Components.Input
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Components.Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                />
                <Components.Button onClick={handleSignUp}>
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
                  Enter Your personal details and start journey with us
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
