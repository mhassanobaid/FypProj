import React, { useState, useEffect } from "react";
import { useUser } from "../../Components/User/UserContext";
import {
  TourCardd,
  TourCardContainerr,
  HDef,
  TourDetailDv,
  OuterTourDet,
  TourDetImg,
  TourDetLogo,
  Button,
  SlideShowContainer,
  TourCompanyInfo,
  Roomicon,
  Roomicon1,
  BookingDet,
} from "../../Components/Common/Components";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import bgImg from "../../Assets/images/sgnUp2a.jpg";
import LinkList from "../../Components/Common/LinkList";
import Footer from "../../Components/Common/Footer";
import ImageSlideshow from "../../Components/Common/ImageSlideshow";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TBookingPdf from "./TBookingPdf";
import TFCSS from "../../Assets/styles/TFavCss.module.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const TFav = () => {
  const { user, updateUser } = useUser();
  let [favoriteTours, setFavoriteTours] = useState(user?.favorites || []);
  let [bookedTours, setBookedTours] = useState(user?.bookedTours || []);

  const navigate = useNavigate();
  const loc = useLocation();
  const queryParams = new URLSearchParams(loc.search);
  const source = queryParams.get("source");
  console.log(user);
  console.log(bookedTours);
  useEffect(() => {
    if (!user || !user.selectedTour) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleAnchorClick = (tourd) => {
    console.log("ME IN TFav page" + tourd);
    // Navigate to TourDetails page with the selected tourId

    // Navigate to TourDetails page with the selected tourId
    console.log(tourd);
    navigate("/tourdet", { state: { TourId: tourd, fromFav: 1 } });
  };
  const wese = () => {
    console.log(typeof favoriteTours);
    console.log(source + "dasdasd");
  };
  const dvSt = {
    display: "inline",
    fontWeight: "bold",
  };
  const dvSta = {
    display: "inline",
    fontWeight: "bold",
  };


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
          console.log("UHOME FAV FETCH ME HN\n");
          
          console.log("\n");
        
          const modifiedToursDatae = toursData.map(tour => ({
            descreption: tour.descreption,
            tourid: tour.tourid,
            title: tour.title,
            location: tour.location,
            image_url: tour.image_url,
            company_id: tour.company_id,
            departure_date: tour.departure_date,
            number_of_persons: tour.number_of_persons,
            price: tour.price,
            number_of_days: tour.price_per_tourist   
            
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
      console.log("RESPONSE IS :-" + response);
      if (response.ok) {
        console.log("Success: Retrieved tours successfully");

        try {
          const toursDatae = await response.json();
          console.log("BOOKED TOUR FETCH ME HUN\n");
          console.log(toursDatae);
          console.log("\n");

          const modifiedToursDatae = toursDatae.map((tour) => ({
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
            number_of_days: tour.price_per_tourist   
            // Add more custom key-value pairs as needed
          }));
          updateUser({ ...user, bookedTours: modifiedToursDatae });
          // updateUser(updatedUser);
          console.log("array of booked rha hun me\n");

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
  useEffect(() => {
    fetchBookdTours();
    console.log("Papaye");
    // Assuming user is the user object

    fetchFavTours();
    // Display user properties
    console.log(user);
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <TourDetLogo>
        <img src={logo} alt="" />
      </TourDetLogo>

      <SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </SlideShowContainer>
      <LinkList />
      {source == "f1" && (
        <>
          <HDef>
            <h2>Favorite Tours</h2>
          </HDef>
          <div class={TFCSS.dvv}>
            {favoriteTours.length === 0 ? (
              <div className={TFCSS.noFavorites}>
                <p>Not Favorite Tours yet</p>
              </div>
            ) : (
              <TourCardContainerr>
                {favoriteTours.map((tour, index) => (
                  <a
                    key={index}
                    onClick={() => handleAnchorClick(tour.tourid)}
                    style={{ textDecoration: "none" }}
                  >
                    <div class={TFCSS.insiDv}>
                      <TourCardd>
                        {/* Render tour details here */}
                        <img
                          src={tour.image_url}
                          alt="Tour"
                          style={{
                            width: "100%",
                            height: "200px",
                            marginTop: "35px",
                            marginLeft: "5px",
                          }}
                        />
                        <div>
                          <h3
                            style={{ fontSize: "1.17em", fontWeight: "bold" }}
                          >
                            <div class={TFCSS.tct}>{tour.title}</div>
                          </h3>
                          <p>
                            <div style={dvSt}>Location:</div>&ensp;
                            <div class={TFCSS.tct}>{tour.location}</div>
                          </p>
                          <p>
                            <div style={dvSt}>Price per tourist:</div>
                            &ensp;&ensp;&ensp;&ensp;
                            <div class={TFCSS.tcts}>
                              <strong>{tour.price}$</strong>
                            </div>
                          </p>
                          <p>
                            <div style={dvSt}>Tourists Allowed:</div>
                            &ensp;&nbsp;
                            <div class={TFCSS.tct}>
                              {tour.number_of_persons}
                            </div>
                          </p>
                          <p>
                            <div style={dvSt}>Departure Date:</div>&ensp;&nbsp;
                            <div class={TFCSS.tct}>{tour.departure_date}</div>
                          </p>
                          <p>
                            <div style={dvSt}>Number of Persons:</div>&ensp;&nbsp;
                            <div class={TFCSS.tct}>{tour.number_of_persons}</div>
                          </p>
                         
                        </div>
                      </TourCardd>
                    </div>
                  </a>
                ))}
              </TourCardContainerr>
            )}
          </div>
        </>
      )}
      {source == "b2" && (
        <>
          <HDef>
            <h2>Booked Tours</h2>
          </HDef>
          <div class={TFCSS.dvv}>
            {bookedTours.length === 0 ? (
              <div className={TFCSS.noFavorites}>
                <p>Not Booked Tours yet</p>
              </div>
            ) : (
              <>
                {bookedTours.map((tour, index) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  >
                    {/* Render tour details here */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "300px",
                        border: "1px solid grey",
                        width: "700px",
                      }}
                    >
                      {" "}
                      {/* Encapsulate the tour card content */}
                      <img
                        src={tour.image_url}
                        alt="Tour"
                        style={{
                          width: "300px",
                          height: "200px",
                          marginTop: "35px",
                          marginLeft: "5px",
                        }}
                      />
                      <div
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          backgroundColor: "antiquewhite",
                          padding: "10px",
                        }}
                      >
                        <h3 style={{ fontSize: "1.17em", fontWeight: "bold" }}>
                          <div className={TFCSS.tct}>{tour.title}</div>
                        </h3>
                        <p>
                          <div style={dvSta}>Location:</div>&ensp;
                          <div className={TFCSS.tcts}>
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                            {tour.location}
                          </div>
                        </p>

                        <p>
                          <div style={dvSta}>Price per tourist:</div>
                          &ensp;&ensp;
                          <div className={TFCSS.tcts}>{tour.price}$</div>
                        </p>
                        <p>
                          <div style={dvSta}>Tourists Going:</div>
                          &ensp;&ensp;&ensp;&nbsp;
                          <div className={TFCSS.tcts}>
                            {tour.tourists_going}
                          </div>
                        </p>
                        <p>
                          <div style={dvSta}>Total Amount:</div>
                          &ensp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;
                          <div className={TFCSS.tcts}>{tour.total_amount}$</div>
                        </p>
                        <p>
                          <div style={dvSta}>Departure Date:</div>
                          &ensp;&ensp;&nbsp;
                          <div className={TFCSS.tcts}>
                            {tour.departure_date}
                          </div>
                        </p>
                        <p>
                          <div style={dvSta}>Booked At:</div>
                          &ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;
                          <div className={TFCSS.tcts}>
                            {" "}
                            {new Date(tour.bookedAt).toLocaleString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </div>
                        </p>
                        {/*      id,
      naam,
      image,
      location,
      price,
      tourists,
      touristsValue,
      totalPrice,
      departureDate */}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}

      
      <Footer style={{ position: "absolute", bottom: 0, width: "100%" }} />
    </div>
  );
};
export default TFav;
