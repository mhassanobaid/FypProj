// Home.js
import React, { useState, useEffect,useRef } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import NotificationUI from "../../Components/Common/NotificationUI";
import wImg from '../../Assets/images/reviewIcon.png'
const UHome = () => {
  const [currentView, setCurrentView] = useState("tours");
  
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  let [userAuthenticated, setUserAuthenticated] = useState(false);
  const { user, updateUser } = useUser();
  
  const UseName = user ? user.username : "Welcome User";
  userAuthenticated = user ? true : false;
  
  const [tourc, setTours] = useState([]);
  const [bookedTours, setBookedTours] = useState([]);
  const [favoriteTours, setFavoriteTours] = useState([]);
  const [bookedToursInitializedd, setBookedToursInitializedd] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [formData, setFormData] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [expiredTour, setExpiredTour] = useState(null);
  const navigate = useNavigate();
  const [showNotificationz, setShowNotificationz] = useState(false);
  const [showNotificationba, setShowNotificationba] = useState('');
  const [tcCmpName, setTcCmpName] = useState('');
  const [showNotificationbaa, setShowNotificationbaa] = useState(false);
  const [showNotificationcaa, setShowNotificationcaa] = useState(false);
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };
  const bookedToursInitialized = useRef(false);
  const favoritesInitialized = useRef(false);
 
 // const [tourCmp, setTourCmp] = useState({});
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
  const hideNotificationz = () => {
    setShowNotificationz(false);
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

  useEffect(() => {
    if (user && user.bookedTours.length > 0) {
      const currentDate = new Date();
      const formattedCurrentDate = currentDate.toISOString().split("T")[0];

      const toursNeedingReview = user.bookedTours.filter(tour => {
        const tourEndDate = new Date(tour.departure_date);
        tourEndDate.setDate(tourEndDate.getDate() + tour.number_of_days);
        const formattedTourEndDate = tourEndDate.toISOString().split("T")[0];
        console.log("format Current  Date"+formattedCurrentDate);
        console.log("tour end date"+formattedTourEndDate);
        return formattedCurrentDate > formattedTourEndDate;
      });
  
      if (toursNeedingReview.length > 0) {
       
         

        fetch("http://localhost:8199/ppppp/AdminUserRet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "retrieveCompanyName",
            tourid: toursNeedingReview[0].tourid,
            userid: user.id
          })
        })
        .then(response => {
          if (response.ok) {
            setExpiredTour(toursNeedingReview[0]);
            setShowNotificationbaa(true);
            setShowNotificationba("You have a tour ready for review");
            return response.json();
        } else if (response.status === 409) { // SC_CONFLICT
            // Handle the case where the tour has already been reviewed
            // For example, don't show any notification
            return null;
        } else {
            throw new Error('Network response was not ok.');
        }
        })
        .then(data => {
          if (data) {
            setTcCmpName(data.companyName);
            console.log("Company Name:(-_-)-", data.companyName);
            setShowNotificationcaa(true);            
        }
        // Handle the response as needed
        })
        .catch(error => {
          console.error("Error fetching company name:", error);
        });
      
      }
    }
  }, [user]);
 
  const fetchFavTours = async () => {
    
    try {
      const requestBody = { action: "retrieveFavTours", userId: user.id };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
      });
       console.log("RESPONSE IS :-"+response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursData = await response.json();
          console.log("UHOME KE FAV FETCH ME HN\n");
          
          console.log("\n");
        
          const modifiedToursDatae = toursData.map(tour => ({
            descreption: tour.descreption,
            tourid: tour.tour_id,
            title: tour.title,
            location: tour.location,
            image_url: tour.image_url,
            company_id: tour.company_id,
            departure_date: tour.departure_date,
            number_of_persons: tour.number_of_persons,
            price: tour.price,
            number_of_days: tour.number_of_days
            
          })); 
         
          updateUser({ ...user, favorites: modifiedToursDatae });
         
          console.log(user);
          
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
  const fetchTours = async (formData = null) => {
    console.log("UHOME KE ME IN FETCH TORs:--" + JSON.stringify(formData));
    try {
      const requestBody = formData
        ? { action: "retrieveTours", ...formData }
        : { action: "retrieveTours" };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
      });
       console.log("RESPONSE IS :-"+response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursData = await response.json();
          if (formData && formData.location && formData.money && formData.tourists) {
            console.log("\n__--__\n");  
            console.log(formData);
            console.log("\n__--__\n");  
            if (toursData.length === 0) {
              setShowNotification(false);
              setShowNotificationa(true);
            } else {
              setShowNotification(true);

              console.log("Received Response", toursData);
              setTours(toursData);
              
              console.log("Received Response Type", typeof toursData);
            }
          } else {
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
  
  const fetchBookdTours = async () => {
    
    try {
      const requestBodye = { action: "retrieveBookdTours", userId: user.id };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBodye), // Sending action of 'retrieveTours'
      });
       console.log("RESPONSE IS :-"+response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursDatae = await response.json();
          console.log("UHOME BOOKED TOUR FETCH ME HUN\n");
          //console.log(toursDatae);
          console.log("\n");
       
 
          const modifiedToursDatae = toursDatae.map(tour => ({
            userid: tour.user_id,
            tourid: tour.tour_id,
            title: tour.title,
            location: tour.location,
            image_url: tour.image_url,
            tourists_going: tour.tourist_going,
            total_amount: tour.price,
            departure_date: tour.departure_date,
            bookedAt: tour.booked_at,
            price: tour.price_per_tourist,
            number_of_days :tour.number_of_days            
            // Add more custom key-value pairs as needed
          }));
          updateUser({ ...user, bookedTours: modifiedToursDatae });
          // updateUser(updatedUser);
          //console.log("array of booked rha hun me\n");
          
          console.log(user);
          
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
 
  const hasFetchedRef = useRef(false); 
  useEffect(() => {
    if (user && !hasFetchedRef.current) {
      fetchBookdTours();
      // fetchFavTours();
      hasFetchedRef.current = true; // Set the ref to true after fetching
    } else if (!user) {
      navigate('/');
    }
  }, [user, navigate]); 

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    console.log("Tours Array of objects: ", tourc);
    console.log("User data: ", user);
  }, [tourc, user]);
 


  
  const hndlSech = (formData) => {
    console.log("Received formData:");
    // Perform other actions with formData
    setFormData(formData);
    console.log("ME IN UHOME *__*:-" + JSON.stringify(formData));
    fetchTours(formData);


  };
  const handleClickee = () => {
    navigate("/review", { state: { TourId: expiredTour.tourid, Tour: expiredTour,TCName: tcCmpName } });
  };
  return (
    <div className={HCss.app}>
       
       {showNotificationbaa && (
        <>
        <div style={{border:'4px solid white',width:'900px',height:'100px',position:'absolute',top:'100px',zIndex:'9000000',left:'220px'}}>
        <p style={{ color: 'red',position:'absolute',top:'1px',left:'95px',fontWeight:'bold',fontSize:'24px', whiteSpace: 'nowrap',zIndex:'20000' }}>{showNotificationba}</p>
        <div><img src={wImg} alt="" width={'70px'} style={{position:'absolute',left:'20px',top:'18px',zIndex:'10000000px'}} /></div>
        </div>
        </>
      )}
      {showNotificationcaa&&(
        <>
        <div style={{height:'90px',width:'270px',position:'absolute',border:'1px solid white',zIndex:'500000000',left:'800px',top:'110px'}}>
          <a style={{cursor:'pointer'}} onClick={handleClickee}>
            <img src={expiredTour.image_url} width='132px' style={{ border: '1px solid white' }}  />
            <p style={{position:'absolute',top:'-2px',left:'142px',color:'white',fontSize:'22px',margin:'0px',padding:'0px',lineHeight:'1.0',fontWeight:'bold'}}>{expiredTour.title}</p>
            <p style={{position:'absolute',top:'9px',left:'234px',color:'white',fontSize:'22px',margin:'0px',padding:'0px',lineHeight:'1.0'}}>by</p>
            <p style={{position:'absolute',top:'52px',left:'145px',color:'white',fontSize:'18px',margin:'0px',padding:'0px',lineHeight:'1.0',}}>{tcCmpName}</p>
            </a>
        </div>
        </>
      )}
      {showNotification && (
        <>
          <h3
            style={{
              position: "absolute",
              left: "120px",
              top: "370px",
              margin: "0px",
              padding: "0px",
              textDecoration: "underline",
              textDecorationColor: "#1172D4",
            }}
          >
            Search Results
          </h3>
        </>
      )}
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
                  company_id = {tour.company_id}
                  number_of_days = {tour.number_of_days}
                />
              ))}
            </div>
            {showNotificationa && (
              <NotificationUI
                message="Tour not found"
                onHide={hideNotificationa}
                position="fixed"
                left="700px"
                top="25px"
              />
            )}
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
