// SignUp.js
import React, { useState } from 'react';
import LogIn from '../SignUpLogIn/LogIn';
import SUCss from '../../Assets/styles/SignUpCss.module.css';

import LinkList from '../../Components/Common/LinkList'



const SignUp = (onViewChange) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[ContactNo,setContactNo] = useState();
  const[jumpLogin,setJumpLogin] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [currentView, setCurrentView] = useState("tours");
  const userType = '0';
  const [showHeader, setShowHeader] = useState(true);
  const [fromSignUp,setFromSignUp] = useState(true);

  const handleSignUp = async () => {
    try {
        const response = await fetch('http://localhost:8080/fypPract/SignUpServlet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `fullName=${encodeURIComponent(fullName)}&contactNo=${encodeURIComponent(ContactNo)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&userType=${encodeURIComponent(userType)}`,
        });

        if (response.ok) {
            // Handle success (e.g., show a success message)
            console.log("-][-");
            // navigate('/Login');
            setJumpLogin(true);
            
           

        } else {
            // Handle errors (e.g., show an error message)
            console.error('Sign Up Failed456');
        }
    } catch (error) {
        console.error('Error:123', error);
        console.log(fullName+email+password);
    }
};




  return (
    <div>
      <img src="/images/logo.png" alt="" className={SUCss.logoOnDsh} />
    <div className={SUCss.bdySignUp}>
      
      {jumpLogin? (<LogIn/>): (<>
        <img src="/images/bgpicSignUp.jpg" alt=""  />
        <LinkList />
        
        <form>
        <h2 className={SUCss.packageText}>Sign Up</h2>
          <div className={SUCss.inputsSignUp}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ContactNo">Contact No:</label>
            <input
              type="text"
              id="ContactNo"
              value={ContactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleSignUp} className={SUCss.signUpButton}>
            Get Started
          </button>
          </div>
        </form>
      
    
  
  
        </>)}
       </div>
       </div>
  );
};

export default SignUp;
