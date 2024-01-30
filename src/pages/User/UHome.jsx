// Home.js
import React, { useState } from "react";
import Header from "../../Components/Common/Header";
import TourCard from "../../Components/User/TourCard";
import ReviewSlider from "../../Components/User/ReviewSlider";
import HCss from '../../Assets/styles/HomeCss.module.css'

import Footer from "../../Components/Common/Footer";

import SignUp from "../SignUpLogIn/SignUp";
import UAbout from "./UAbout";
import UContact from "./UContact";

const UHome = () => {
  
  const [currentView, setCurrentView] = useState("tours");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

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
      location: "NathiaGali",
      price: 99,
      tourists: 20,
    },
    {
      id: 2,
      naam: "Murree Journey",
      image: "/images/kalarkahaar.jpg",
      location: "Murree Expedition",
      price: 149,
      tourists: 15,
    },
    {
      id: 3,
      naam: "KalarKahaar Journey",
      image: "/images/nathiagali.jpg",
      location: "KalrKahar Expedition",
      price: 149,
      tourists: 15,
    },
    {
      id: 4,
      naam: "KalarKahaar Journey",
      image: "/images/neelumValley.jpg",
      location: "KalrKahar Expedition",
      price: 149,
      tourists: 15,
    },
    {
      id: 5,
      naam: "KalarKahaar Journey",
      image: "/images/swatValley.jpg",
      location: "KalrKahar Expedition",
      price: 149,
      tourists: 15,
    },
    {
      id: 6,
      naam: "KalarKahaar Journey",
      image: "/images/nelumValley.jpg",
      location: "KalrKahar Expedition",
      price: 149,
      tourists: 15,
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
