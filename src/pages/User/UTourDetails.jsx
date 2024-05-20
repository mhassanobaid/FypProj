import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  TourDetLogo,
  TourDetailDv,
  OuterTourDet,
  Button,
  SlideShowContainer,
} from "../../Components/Common/Components";
import { FaStar } from 'react-icons/fa';
import logo from "../../Assets/images/logo.png";
import Mapp from "../../Assets/images/map.jpg";
import Footer from "../../Components/Common/Footer";
import LinkList from "../../Components/Common/LinkList";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Components/User/UserContext";
import ImageSlideshow from "../../Components/Common/ImageSlideshow";
import NotificationUI from "../../Components/Common/NotificationUI";
import Map from '../User/Map';

const UTourDetails = () => {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  const loc = useLocation();
  const [reviews, setReviews] = useState([]);

  

  useEffect(() => {
    // Check if state is undefined, and navigate to '/' if it is
    if (!loc.state) {
      console.log("KRBALA");
      
      window.location.href = '/';
    }
  }, [loc.state, navigate]);
  
 

  // If state is undefined, return null to prevent rendering
 
  const tours = loc.state?.Tours ?? [];
 
  const favoritess = user && user.favorites ? user.favorites : [];

  // const tourId = loc.state?.TourId ?? "";
  // const fromFav = loc.state.fromFav ? loc.state.fromFav : 0;
  const tourId = loc.state?.TourId ?? "";
  const fromFav = loc.state?.fromFav ?? 0;
  console.log("TUNESISLONELY"+tourId+"\nMe TFav se aya ya nhn"+fromFav);


  const [TCompData, setTCompData] = useState([]);
  const [tourCmp, setTourCmp] = useState(null);
 
  const selectedTour = fromFav
    ? favoritess.find((tour) => tour.tourid === tourId)
    : tours.find((tour) => tour.tourid === tourId);
 
    const {
      tourid,
      title,
      image_url,
      location,
      price,
      number_of_persons,
      departure_date,
      descreption,
      number_of_days,
      company_id,
    } = selectedTour ?? {};

  // Function to set the tourCmp object
  const setTourCompany = (companyId) => {
    console.log(companyId);
    let company = TCompData.find((company) => company.id === companyId);
    setTourCmp(company);
    console.log("MEinSetTourcompany "+JSON.stringify(tourCmp));
  };

 
 
                    
  async function fetchTComp() {
    console.log("ME IN FETCH TComp:--" + JSON.stringify(TCompData));
    try {
      const requestBody = { action: "retrieveTComp" };
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Sending action of 'retrieveTours'
      });

      if (response.ok) {
        console.log("Success: Retrieved tour Companies (*)_(*) successfully");
        try {
          const tourCompaniesData = await response.json();
          console.log(tourCompaniesData);
          setTCompData(tourCompaniesData);
          console.log('lkapio'+company_id);
          setTourCompany(company_id);
          //TCompData
        
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Failed to retrieve tours:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching tours companies:", error);
    }
  };


                      // useEffect(() => {
                      //   // Log the value of tourc when it changes
                      //   fetchTComp();
                      //   console.log("Tours Companies Array of objects: ", TCompData);
                      //   setTourCompany(company_id);
                      // }, [TCompData, company_id]);
                      useEffect(() => {
                        // Log the value of tourc when it changes
                        fetchTComp();
                        setTourCompany(company_id);
                        // 
                       
                      }, tourCmp);
                      
                      /*   fetch("http://localhost:8199/ppppp/AdminUserRet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "retrieveCompanyName",
            tourid: toursNeedingReview[0].tourid,
            userid: user.id
          })
        }) */
                      useEffect(() => {
                        console.log("nmna");
                        if (tourCmp?.id) {
                          fetch("http://localhost:8199/ppppp/Demo", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              action: "fetchReview",
                              companyId: tourCmp.id,
                            })
                          })
                            .then((response) => response.json())
                            .then((data) => {
                              setReviews(data);
                              //console.log(reviews);
                            })
                            .catch((error) => {
                              console.error("Error fetching reviews:", error);
                            });
                        }
                      }, [tourCmp]);





                      const renderStars = (rating) => {
                        const stars = [];
                        for (let i = 0; i < 5; i++) {
                          stars.push(
                            <FaStar key={i} color={i < rating ? "gold" : "lightgray"} />
                          );
                        }
                        return stars;
                      };


                      // useEffect(() => {
                      //   // Update tourCmp when company_id changes
                      //   setTourCompany(company_id);
                        
                              




                      // useEffect(() => {
                      //   fetch("http://localhost:8199/AdminUserRet", {
                      //     method: "POST",
                      //     headers: {
                      //       "Content-Type": "application/json",
                      //     },
                      //     body: JSON.stringify({ 
                      //       action: "fetchReview",
                      //       companyId:tourCmp.id
                      //      }),
                      //   })
                      //     .then((response) => response.json())
                      //     .then((data) => {
                      //       setReviews(data);
                      //       console.log(reviews);
                      //     })
                      //     .catch((error) => {
                      //       console.error("Error fetching reviews:", error);
                      //     });
                      // }, [tourCmp.id]);


                      // }, [company_id]); 

  // console.log("tours aarray \n\n");
  // for(let i=0;i<tours.length;i++)
  // {
  //   let oo = tours[i];
  //   for(let key in oo)
  //     console.log(`${key}:---${oo[key]}  `);
  // }
  // console.log("\n");
  // console.log(`Tourid received from tour card:-- ${tourId}\nFromFav:-- ${fromFav}`);

  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const [showNotificationb, setShowNotificationb] = useState(false);

  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationa = () => {
    setShowNotificationa(false);
  };

  const hideNotificationb = () => {
    setShowNotificationb(false);
  };
  // const [fromFav, setFromFav] = useState(false);

  {
    /*useEffect(() => {
    if (loc.state && loc.state.fromFav) {
      setFromFav(true);
    }
  }, [loc]);*/
  }

  // if (!tours.length) {
  //   return <div>Tours not available</div>;
  // }

  console.log(tourId);

  // console.log("SELECTED TOUR (*_*)");
  // for(let key in selectedTour)
  //     console.log(`${key}:----${selectedTour[key]}`);

  if (!selectedTour) {
    console.log(favoritess);
    console.log(typeof tourId);
    console.log(fromFav);

    return <div>Tour not found</div>;
  }

  console.log(
    "*__*)" +
      typeof number_of_days +
      "(*<_>*)" +
      typeof departure_date +
      "(-)__(-) tComp js ne bnaya " +
      company_id
  );
  const departureDate = new Date(departure_date);

  // Add number_of_days to departureDate
  departureDate.setDate(departureDate.getDate() + number_of_days);

  // Format arrivalDate to your desired format (e.g., "YYYY-MM-DD")let arrival_date;
  let arrival_date;
if (!isNaN(departureDate.getTime())) {
  arrival_date = departureDate.toISOString().split("T")[0];
} else {
  arrival_date = "Invalid Date";
}

  const handleBookPackage = () => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
    console.log(currentDateString);
    // Check if current date is less than or equal to departure date and tourists is greater than 1
    if (user) {
      console.log("I am in book package button \n" + number_of_days);
      console.log(user);
      if (number_of_persons >= 1) {
        // Assuming you have a route named '/account-details'

        if (selectedTour) {
          const isTourAlreadyBooked = user.bookedTours.some(
            (tour) => tour.tourid === tourid
          );
          console.log(isTourAlreadyBooked + "jh");
          // Update user context with selected tour details
          if (!isTourAlreadyBooked) {
            updateUser({
              ...user,
              selectedTour: Array.isArray(user.selectedTour) ? [
                
                {
                 /*selectedTour: {
                tourid: tourId,
                title: selectedTour.title,
                location: selectedTour.location,
                price: selectedTour.price,
                number_of_persons: selectedTour.number_of_persons,
                image_url: selectedTour.image_url,
                departure_date: selectedTour.departure_date,
                descreption: selectedTour.descreption, */
                  userid: user.id,
                  tourid: tourId,
                  title: title,
                  location: location,
                  price: price,
                  number_of_persons: number_of_persons,
                  image_url: image_url,
                  departure_date: departure_date,
                  descreption: descreption,
                  company_id : company_id,
                  number_of_day: number_of_days
                  // Add other tour details as needed
                },
              ] : [{
                userid: user.id,
                  tourid: tourId,
                  title: title,
                  location: location,
                  price: price,
                  number_of_persons: number_of_persons,
                  image_url: image_url,
                  departure_date: departure_date,
                  descreption: descreption,
                  company_id : company_id,
                  number_of_day: number_of_days
                // Add other tour details as needed
              }]
              
            });
            console.log("KONSE TOUR ME HN"+tourId);
            navigate("/tbooking", { state: { tourCmp, tourId } });

          } else {
            setShowNotificationa(true);
          }
        } else {
          console.error("Selected tour not found");
        }
      } else {
        // Provide a message or handle the case where the conditions are not met
        setShowNotification(true);
      }
    } else {
      setShowNotificationb(true);
    }
  };

 
  const containerStyles = {
    width: "100vw",
    height: "30vh",
    margin: "0 auto",
    zIndex: "300",
  };

  const dvSt = {
    width: "20vw",
    height: "30vh",
    backgroundColor: "skyblue",

    display: "inline",
    position: "absolute",
    left: "30px",
    top: "180px",
  };

  const slideSty = {
    backgroundImage: `url(${Mapp})`,
    width: "100%",
    height: "100%",

    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const sliderSty = {
    height: "100%",
    position: "relative",
  };

  const textDiv = {
    marginBottom: "11px",
    marginLeft: "350px",
  };
  const packageText = {
    display: "inline",
    fontSize: "20px",
    marginLeft: "9px",
    marginTop: "9px",
    paddingTop: "20px",
    textDecoration: "underline",
    textDecorationColor: "#1174D4",
  };
  const pcStyle = {
    marginLeft: "-68px",
    display: "inline",
  };
  const appContainerrStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Adjust height as needed
  };
  return (
    <div style={{ height: "130vh" }}>
      <SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </SlideShowContainer>

      <TourDetLogo>
        <img src={logo} alt="" />
      </TourDetLogo>
      <LinkList />
      <div style={{ position: "absolute", top: "180px", right: "0", width: "20%", maxHeight: "400px", overflowY: "scroll", padding: "10px", border: "1px solid #ddd", borderRadius: "4px" }}>
      <h3 style={{textDecoration:'underline',textDecorationColor:'#1174D4'}} >Tour Reviews of <span>{tourCmp && tourCmp.company_name}</span></h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "30px", width: "100%", boxSizing: "border-box" }}>
            <p><strong>Tour :</strong> {review.tourTitle}</p>
            <p><strong>Tourist:</strong> {review.userFullName}</p>
            <p><strong>Rating:</strong> {renderStars(review.rating)}</p>
            <p><strong>Comment:</strong> {review.comments}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
      {/* width="20vw" height="30vh" color="skyblue" pos="relative" left="-500px" top="60px" */}
      {/* <a
        href="https://www.google.com/maps/place/Murree,+Rawalpindi,+Punjab,+Pakistan/@33.9037852,73.3547466,13z/data=!3m1!4b1!4m6!3m5!1s0x38dfd715776097a9:0x17b2e1d6bfb8e190!8m2!3d33.9069576!4d73.3943017!16zL20vMDQwaDFq?entry=ttu"
        target="_blank"
      >
        <div style={dvSt}>
          <div style={sliderSty}>
            <div style={slideSty}></div>
          </div>
        </div>
      </a> */}
       <Map location={location} />   
      <div style={textDiv}>
        <h4 style={packageText}>Package Detail</h4>
      </div>
      {showNotification && (
        <NotificationUI
          message="The departure date has passed, so you cannot book this package."
          onHide={hideNotification}
          position="absolute"
          left="56vw"
          top="150px"
        />
      )}
      {showNotificationb && (
        <NotificationUI
          message="Please Login First"
          onHide={hideNotificationb}
          position="absolute"
          left="56vw"
          top="150px"
        />
      )}
      <OuterTourDet>
        <TourDetailDv>
          <h2 style={{ marginLeft: "10px" }}>
            {title}{" "}
            <span
              style={{
                fontSize: "0.6em",
                verticalAlign: "sub",
                fontFamily: "Roboto",
              }}
            >
              {tourCmp && tourCmp.company_name}
            </span>
          </h2>
          <div style={{ marginLeft: "10px" }}>
            <p style={{}}>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "100px",
                }}
              >
                Price per Tourist: $
              </div>
              <div style={pcStyle}>{price}</div>
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "100px",
                }}
              >
                Location:{" "}
              </div>
              {location}
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginLeft: "76x",
                }}
              >
                Tourists Allowed
              </div>
              <div style={{ display: "inline", marginLeft: "44px" }}>
                {number_of_persons}
              </div>
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "94px",
                }}
              >
                Departure
              </div>
              {departure_date}
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "94px",
                }}
              >
                Total Days
              </div>
              {number_of_days}
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "118px",
                }}
              >
                Arrival
              </div>
              {arrival_date}
            </p>
            <p>
              <div
                style={{
                  display: "inline",
                  margin: "0px",
                  padding: "0px",
                  fontWeight: "bold",
                  marginRight: "50px",
                }}
              >
                Description
              </div>
              <div style={{ marginLeft: "32px", display: "inline" }}>
                {descreption}
              </div>
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              marginLeft: "170px",
              marginTop: "40px",
            }}
          >
            <h3>Image</h3>
            <div>
              <img src={image_url} alt="Tour" />
            </div>
          </div>
          <Button
            style={{ position: "relative", top: "40px", left: "250px" }}
            onClick={handleBookPackage}
          >
            Book Package
          </Button>
        </TourDetailDv>
      </OuterTourDet>
      {showNotificationa && (
        <NotificationUI
          message="Tour already booked by you"
          onHide={hideNotificationa}
          position="fixed"
          left="700px"
          top="25px"
        />
      )}
      <Footer Top={120} />
    </div>
  );
};

export default UTourDetails;
