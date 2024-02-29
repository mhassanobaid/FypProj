// SignUp.js
import React, { useState,useEffect } from 'react';
import * as Components from '../../Components/Common/Components';
import {useNavigate} from 'react-router-dom';
import { user,useUser } from '../../Components/User/UserContext';
import { useLocation } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';

import SUCss from '../../Assets/styles/SignUpCss.module.css';
import bgImg from '../../Assets/images/sgnUp2.jpg';

import { useHistory } from 'react-router-dom';

import logoo from '../../Assets/images/logo.png'
import LinkList from '../../Components/Common/LinkList'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HeaderWTC from '../../Components/Common/HeaderWTC';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import Footer from '../../Components/Common/Footer';

const SignUp = (onViewChange) => {
  const location = useLocation();
  let isLogin = new URLSearchParams(location.search).get('login');
    const { updateUser } = useUser();
  var [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[contactNo,setContactNo] = useState();
  const[jumpLogin,setJumpLogin] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [currentView, setCurrentView] = useState("tours");
  const userType = '0';
  const [showHeader, setShowHeader] = useState(true);
  const [fromSignUp,setFromSignUp] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPassword = (password) => {
    return password.length >= 8;
  };
  
  const validateUserData = (fullName, email, password) => {
    const isValid = (
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      isValidEmail(email) &&
      isValidPassword(password)
    );
  
    return isValid;
  };
  
  const validateUserDatae = (email, password) => {
    const isValid = (
      email.trim() !== '' &&
      password.trim() !== '' &&
      isValidEmail(email) &&
      isValidPassword(password)
    );
  
    return isValid;
  };

  const handleSignUp =  () => {
    
    let nameInput = document.querySelector('input[name="username"]');
    let Name = nameInput?nameInput.value:'';
    let emailInput = document.querySelector('input[name="email"]');
    let Email = emailInput ? emailInput.value : '';
    let pwdInput = document.querySelector('input[name="password"]');
    let Pwd = pwdInput?pwdInput.value:'';



    const isValid = validateUserData(Name, Email, Pwd);

    
    // try {
    //     const response = await fetch('http://localhost:8080/fypPract/SignUpServlet', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: `fullName=${encodeURIComponent(fullName)}&contactNo=${encodeURIComponent(contactNo)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&userType=${encodeURIComponent(userType)}`,
    //     });

    //     if (response.ok) {
    //         // Handle success (e.g., show a success message)
    //         console.log("-][-");
    //         // navigate('/Login');
    //         setJumpLogin(true);
    if (isValid) {
        // Update the user state in the UserContext
        updateUser({
          username: Name,
          email: Email,
          bookedTours: [],
          favorites: [],
          selectedTour: []
        });
    
        // Now, you can navigate to the home page or perform other actions
        navigate("/home");
      } else {
        // Handle validation errors
        console.error('Invalid user data');
      }
    // const cvp = document.querySelector('input[name="username"]');
    // setFullName(cvp.value);
    // setAuthenticated(true);
    // navigate("/home", {state:{userName:cvp.value,userAuthenticated:true}});         

    //     } else {
    //         // Handle errors (e.g., show an error message)
    //         console.error('Sign Up Failed456');
    //     }
    // } catch (error) {
    //     console.error('Error:123', error);
    //     console.log(fullName+email+password);
    // }
};

const handleSignIn = () =>{
    
    
    let emailInput = document.querySelector('input[name="emaile"]');
    let Email = emailInput ? emailInput.value : '';
    let pwdInput = document.querySelector('input[name="passworde"]');
    let Pwd = pwdInput?pwdInput.value:'';

    if(Email=='' || Pwd=='')
    {
      alert('Please fill fields');
      return;
    }


    const isValid = validateUserDatae( Email, Pwd);
    if (isValid) {
        // Update the user state in the UserContext
        updateUser({
          username: Email,
          email: Email,
          bookedTours: [],
          favorites: [],
          selectedTour: []
        });
    
        // Now, you can navigate to the home page or perform other actions
        if (Email === 'admin@gmail.com' && Pwd === '12345678') {
          // If the user is the admin, navigate to the root path
          navigate("/admin");
      } else {
          // Otherwise, navigate to the home page
          navigate("/");
      }
      } else {
        // Handle validation errors
        console.error('Invalid user data');
      }
//   const cp = document.querySelector('input[name="emaile"]');
//   setFullName(cp.value);
//   setAuthenticated(true);
//   navigate("/home", {state:{userName:cp.value,userAuthenticated:true}});  
}




 
let [signIn, toggle] = React.useState(false);
// console.log('HEER'+isLogin);

useEffect(() => {
  // Toggle signIn state based on isLogin value
  if (isLogin) {
    toggle(true);
  }
  else
    toggle(false); 
}, [isLogin]);

  return (
    
    <div className={SUCss.body}>
      {/* <HeaderWTC forSU={true} fullWidth={true}/> */}

      <Components.SlideShowContainer>
      <ImageSlideshow  interval={2000} />
      </Components.SlideShowContainer>
      <Components.TourDetLogo>
    <img src={logo} alt="" /></Components.TourDetLogo>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
      <Components.Container>
      {signIn ? (
            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type="email" placeholder="Email" name="emaile" />
                <Components.Input type="password" placeholder="Password" name="passworde" />
                <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
              </Components.Form>
            </Components.SignInContainer>
          ) : (
            <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Components.Input type="text" placeholder="Name" name="username" />
                <Components.Input type="email" placeholder="Email" name="email" />
                <Components.Input type="password" placeholder="Password" name="password" />
                <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
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
                      <Components.GhostButton onClick={() => {toggle(true)}}>
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
          <Footer Top={95}/>
</div>
  );
};

export default SignUp;
