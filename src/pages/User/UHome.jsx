// Home.js
import React, { useState, useEffect } from "react";
import Header from "../../Components/Common/Header";
import TourCard from "../../Components/User/TourCard";
import ReviewSlider from "../../Components/User/ReviewSlider";
import HCss from "../../Assets/styles/HomeCss.module.css";

import Footer from "../../Components/Common/Footer";

import SignUp from "../SignUpLogIn/SignUp";
import UAbout from "./UAbout";
import { useLocation, useParams } from "react-router-dom";
import UContact from "./UContact";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Components/User/UserContext";
import SearchIcon from '@mui/icons-material/Search';
import NotificationUI from "../../Components/Common/NotificationUI";

const UHome = () => {
  const [currentView, setCurrentView] = useState("tours");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  let [userAuthenticated, setUserAuthenticated] = useState(false);
  const { user, updateUser } = useUser();
  const UseName = user ? user.username : "Welcome User";
  userAuthenticated = user ? true : false;
  const [tourc, setTours] = useState([]);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [formData, setFormData] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  
 
  const hideNotificationa=()=>{
    setShowNotificationa(false);
  }
  // const loc = useLocation();
  // var userNam = loc.state?.userName ?? 'Welcome User';
  // useEffect(() => {
  //   setUserAuthenticated(loc.state?.userAuthenticated ?? false);
  // }, [loc.state?.userAuthenticated]);

  

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

  const fetchTours = async (formData = null) => {
    console.log("ME IN FETCH TORs:--"+JSON.stringify(formData));
    try {
      const requestBody = formData ? { action: "retrieveTours", ...formData } : { action: "retrieveTours" };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
      });

      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursData = await response.json();
          if (formData && Object.keys(formData).length !== 0) {
           if(toursData.length===0)
           {
            
            setShowNotificationa(true);
           }
           else{
            //setShowNotification(true);
            
          console.log("Received Response", toursData);
          setTours(toursData);
          console.log("Received Response Type", typeof toursData);
          
        }
      }else{
        console.log("popippo");
        setShowNotification(false);
        setTours(toursData);
      }

        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Failed to retrieve tours:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };
  useEffect(() => {
    // Fetch tours from backend API
    
    fetchTours();
  }, []);

  useEffect(() => {
    // Log the value of tourc when it changes
    console.log("Tours Array of objects: ", tourc);
    // console.log("Tours Image: ", tourc[0].image_url);
  }, [tourc]); // Run this effect whenever tourc changes


  // const fetchTours = async (formData = null) => {
  //   console.log("ME IN FETCH TORs:--"+JSON.stringify(formData));
  //   try {
  //     const requestBody = formData ? { action: "retrieveTours", ...formData } : { action: "retrieveTours" };
  //     const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
  //     });

  //     if (response.ok) {
  //       console.log("Success: Retrieved tours successfully");

  //       try {
  //         const toursData = await response.json();
  //         if (formData && Object.keys(formData).length !== 0) {
  //          if(toursData.length===0)
  //          {
            
  //           setShowNotificationa(true);
  //          }
  //          else{
  //           //setShowNotification(true);
            
  //         console.log("Received Response", toursData);
  //         setTours(toursData);
  //         console.log("Received Response Type", typeof toursData);
          
  //       }
  //     }else{
  //       console.log("popippo");
  //       setShowNotification(false);
  //       setTours(toursData);
  //     }

  //       } catch (error) {
  //         console.error("Error parsing JSON:", error);
  //       }
  //     } else {
  //       console.error("Failed to retrieve tours:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching tours:", error);
  //   }
  // };
  const hndlSech = (formData) => {
    console.log("Received formData:");
    // Perform other actions with formData
    setFormData(formData);
    console.log("ME IN UHOME *__*:-" + JSON.stringify(formData));
    fetchTours(formData);

    // for(let i=0;i<tourc.length;i++)
    // {
    //   let jj = tourc[i];
    //   for(let key in jj)
    //      console.log(`${key} and value ${jj[key]}`);
    // }

  };

  return (
    <div className={HCss.app}>
      {showNotification && <><h3 style={{position:'absolute',left:'120px',top:'370px',margin:'0px',padding:'0px', textDecoration: 'underline',
  textDecorationColor: '#1172D4'}}>Search Results</h3></>}
      {showHeader ? (
        /* Render main content when showHeader is true */
        <>
          <Header
            onContactClick={handleContactClick}
            onHomeClick={handleHomeClick}
            onAboutClick={handleAboutClick}
            onSignUpClick={handleSignUpClick}
            showSearchBar={showSearchBar}
            userNamee={UseName}
            authenticated={userAuthenticated}
            onSearch={hndlSech}
          />
        </>
      ) : (
        /* Render SignUpForm when showHeader is false */
        currentView === "signup" && <SignUp onViewChange={handleViewChange} />
      )}

      <main className={HCss.mainInApp}>
        {currentView === "tours" && (
          <>
            <div className={HCss.textDiv}>
              <h4 className={HCss.packageText}>Packages</h4>
            </div>
            <div className={HCss.tourCardContainer}>
              {tourc.map((tour) => (
                <TourCard
                  key={tour.id}
                  title={tour.title}
                  image_url={tour.image_url}
                  location={tour.location}
                  price={tour.price}
                  number_of_persons={tour.number_of_persons}
                  tourss={tourc}
                  tourid={tour.tourid}
                  departure_date={tour.departure_date}
                  descreption={tour.descreption}
                />
              ))}

            </div>
            {showNotificationa && <NotificationUI message="Tour not found" onHide={hideNotificationa} position="fixed" left="700px" top="25px"/>}
            <section className={HCss.reviewLand} id="rvLand">
              <h3 className={HCss.h1InRv}>What Users say about us</h3>
              <ReviewSlider />
            </section>
          </>
        )}

        {currentView === "contactDetails" && <UContact />}
        {currentView === "about" && <UAbout fromSignUp={false} />}
      </main>
      <Footer />
    </div>
  );
};

export default UHome;
