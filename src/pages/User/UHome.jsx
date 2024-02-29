// Home.js
import React, { useState,useEffect } from "react";
import Header from "../../Components/Common/Header";
import TourCard from "../../Components/User/TourCard";
import ReviewSlider from "../../Components/User/ReviewSlider";
import HCss from '../../Assets/styles/HomeCss.module.css'

import Footer from "../../Components/Common/Footer";


import SignUp from "../SignUpLogIn/SignUp";
import UAbout from "./UAbout";
import { useLocation, useParams } from 'react-router-dom';
import UContact from "./UContact";
import {useNavigate} from 'react-router-dom';
import { useUser } from '../../Components/User/UserContext';



const UHome = () => {
  
  const [currentView, setCurrentView] = useState("tours");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  let [userAuthenticated, setUserAuthenticated] = useState(false);  
  const { user, updateUser } = useUser();
  const UseName = user ? user.username : 'Welcome User';
   userAuthenticated = user? true:false;

// const loc = useLocation();
// var userNam = loc.state?.userName ?? 'Welcome User';
// useEffect(() => {
//   setUserAuthenticated(loc.state?.userAuthenticated ?? false);
// }, [loc.state?.userAuthenticated]);


    const navigate = useNavigate();
      
  const handleContactClick = () => {
    setCurrentView("contactDetails");
    setShowSearchBar(false);
    setShowHeader(true);
  };

  const handleHomeClick = () => {
    setCurrentView("tours");
    setShowSearchBar(true);
    setShowHeader(true);
  };

  const handleAboutClick = () => {
    setCurrentView("about");
    setShowSearchBar(false);
    setShowHeader(true);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  const handleSignUpClick = () => {
    setCurrentView("signup");
    setShowHeader(false);
  };

  const tours = [
    {
      id: 1,
      naam: "NathiaGali Expendition",
      image: "/images/murree.jpg",
      location: "NathiaGali KPK",
      price: 99,
      tourists: 20,
      departureDate: "2024-03-15", // Example departure date
      description: "Explore the beautiful hills of NathiaGali on this adventurous expedition.", // Description of the tour
    },
    {
      id: 2,
      naam: "Murree Journey",
      image: "/images/kalarkahaar.jpg",
      location: "Murree RWP",
      price: 149,
      tourists: 16,
      departureDate: "2024-01-17", // Example departure date
      description: "Explore the beautiful hills of Murree on this adventurous expedition.", // Description of the tour
    },
    {
      id: 3,
      naam: "KalarKahaar Journey",
      image: "/images/nathiagali.jpg",
      location: "KalrKahar ISL",
      price: 149,
      tourists: 15,
      departureDate: "2024-05-19", // Example departure date
      description: "Explore the beautiful hills of KalarKahaar on this adventurous expedition.", // Description of the tour
    },
    {
      id: 4,
      naam: "Kohaat Journey",
      image: "/images/neelumValley.jpg",
      location: "Kohaat KPK",
      price: 149,
      tourists: 15,
      departureDate: "2024-05-20", // Example departure date
      description: "Explore the beautiful hills of Kohaat on this adventurous expedition.", // Description of the tour
    },
    {
      id: 5,
      naam: "Bhurban Journey",
      image: "/images/swatValley.jpg",
      location: "Murree",
      price: 149,
      tourists: 15,
      departureDate: "2024-05-21", // Example departure date
      description: "Explore the beautiful hills of Bhurban on this adventurous expedition.", // Description of the tour
    },
    {
      id: 6,
      naam: "Swat Journey",
      image: "/images/nelumValley.jpg",
      location: "Swat",
      price: 149,
      tourists: 15,
      departureDate: "2024-06-15", // Example departure date
      description: "Explore the beautiful hills of Swat on this adventurous expedition.", // Description of the tour
    },

    // Add more tours as needed
  ];

 

  return (
    <div className={HCss.app}>
       
      {showHeader ? (
        /* Render main content when showHeader is true */
        <>
          <Header
            onContactClick={handleContactClick}
            onHomeClick={handleHomeClick}
            onAboutClick={handleAboutClick}
            onSignUpClick={handleSignUpClick}
            showSearchBar={showSearchBar}
            userNamee = {UseName}
            authenticated={userAuthenticated}
            
          />
        </>
      ) : (
        /* Render SignUpForm when showHeader is false */
        currentView === "signup" && <SignUp  onViewChange={handleViewChange} />
      )}

     
      <main className={HCss.mainInApp}>
        
        {currentView === "tours"  && (
          <>
            <div className={HCss.textDiv}>
              <h4 className={HCss.packageText}>Packages</h4>
            </div>
            <div className={HCss.tourCardContainer}>
              {tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  naam={tour.naam}
                  image={tour.image}
                  location={tour.location}
                  price={tour.price}
                  tourists={tour.tourists}
                  tourss = {tours}
                  tId = {tour.id}
                  departureDate = {tour.departureDate}
                  description = {tour.description}
                />
              ))}
            </div>
            <section className={HCss.reviewLand} id="rvLand">
              <h3 className={HCss.h1InRv}>What Users say about us</h3>
              <ReviewSlider />
            </section>
          </>
        )}
        
        {currentView === "contactDetails" && <UContact />}
        {currentView === "about" && <UAbout fromSignUp={false}  />}
      </main>
      <Footer  />
    </div>
  );
};

export default UHome;
