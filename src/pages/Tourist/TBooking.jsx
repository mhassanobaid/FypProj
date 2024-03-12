import React, { useState,useEffect } from "react";
import { useUser } from "../../Components/User/UserContext";
import {
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
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import bgImg from "../../Assets/images/sgnUp2a.jpg";
import LinkList from "../../Components/Common/LinkList";
import Footer from "../../Components/Common/Footer";
import ImageSlideshow from "../../Components/Common/ImageSlideshow";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import congrat from "../../Assets/images/congrats.png";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TBookingPdf from "./TBookingPdf";
import NotificationUI from "../../Components/Common/NotificationUI";

const TBooking = () => {
  const { updateUser } = useUser();
  const { user } = useUser();
  const navigate = useNavigate();
  const [Tourists, setTourists] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [showTourists, setShowTourists] = useState(true);
  const [touristsValue, setTouristsValue] = useState(1);
  const [sucessMsg, setSucessMsg] = useState(false);
  const [showGoingTourist, setShowGoingTourist] = useState(false);
  const [tourCancelled, setTourCancelled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const handleDash = () => {
    navigate("/");
    return null;
  };
  // Redirect to home if user is not authenticated or selectedTour is not available
  useEffect(() => {
    if (!user || !user.selectedTour) {
      navigate('/');
    }}, [user, navigate]);

  const { id, naam, location, image, price, tourists,departureDate,description } = user.selectedTour;
  const totalPrice = price * touristsValue;
  // Company account details (replace with actual details)
  const companyAccountDetails = {
    companyName: "SkyVillaTravellers",
    accountNumber: "1234567890-11",
    bankName: "HBL Bank",
    accountHolder: "Ali Waqar",
  };

  const handleIncrement = () => {
    setTourists((prevTourists) => prevTourists + 1);
  };

  const handleDecrement = () => {
    if (tourists > 1) {
      setTourists((prevTourists) => prevTourists - 1);
    }
  };
  const pStyles = {
    fontWeight: "bold",
    display: "inline",
  };
  const insideP = {
    fontFamily: "Helvetica",
    display: "inline",
    marginLeft: "47px",
  };
  const inputStyle = {
    marginLeft: "71px",
  };
  
  const handleConfirmBooking = () => {
    setShowAccountDetails(true);
    setConfirmed(true);
    setShowTourists(false);
    setShowGoingTourist(true);
  };
  const handleCancelDetailButton = () => {
    
    setShowAccountDetails(false);
    setConfirmed(false);
    setShowTourists(true);
    setShowGoingTourist(false);
  };
  const handleInput = (e) => {
    // Capture the value when input changes
    setTouristsValue(e.target.value);
  };

  const handleInputChange = (e) => {
    // Save the value when the default buttons are clicked
    setTouristsValue(e.target.value);
  };
  const handleConfirmBookingOne = () => {
    if (touristsValue < tourists) {
      updateUser((user) => ({
        ...user,
        bookedTours: [
          ...user.bookedTours,
          {
            id: user.selectedTour.id,
            naam: user.selectedTour.naam,
            location: user.selectedTour.location,
            price: user.selectedTour.price,
            tourists: user.selectedTour.tourists,
            image: user.selectedTour.image,
            touristsGoing: touristsValue,
            totalAmount: totalPrice,
            departureDate: departureDate,
            description: description
            // Add other tour details as needed
          },
        ],
      }));
      console.log(touristsValue);
      console.log(user);
      navigate("/tbookprint", {
        state: { CompDet: companyAccountDetails, BookTourId: id },
      });
    } else {
      alert("Please don't exceed the limit of tourists for this package");
      setSucessMsg(false);
      setShowAccountDetails(false);
      setConfirmed(false);
      setShowTourists(true);
      return;
    }
  };
  {
    /*  if (user) {
      const updatedUser = { ...user };
      updatedUser.selectedTour = {
        naam,
        image,
        location,
        price,
        tourists,
        tId,
      };
      console.log(updatedUser);
      updateUser(updatedUser);
    } else {
      alert("Please login first");
    } */
  }
  const handleSuccess = () => {

    

  
    if (touristsValue < tourists) {
      const updatedUser = { ...user };
      updatedUser.bookedTours = updatedUser.bookedTours ?? [];
      updatedUser.bookedTours.push({
        id,
        naam,
        image,
        location,
        price,
        tourists,
        touristsValue,
        totalPrice,
        departureDate
      });
      console.log(user);
      updateUser(updatedUser);
    } else {
      alert("Please don't exceed the limit of tourists for this package");
      setSucessMsg(false);
      setShowAccountDetails(false);
      setConfirmed(false);
      setShowTourists(true);
      return;
    }


    setSucessMsg(true);
  };
   const cancelTour = () => {
    // Remove the recently pushed tour detail from bookedTours array
    updateUser((user) => ({
      ...user,
      bookedTours: user.bookedTours.filter((tour) => tour.id !== id),

    }));
    setTourCancelled(true);
     // Set tourCancelled state to true
  };
  

  // };
  // Add number of tourists
  const buttonStyle = {
    marginLeft: "10px",
    marginTop: "45px",
  };

  const textDiv = {
    marginTop: "-2px",
    marginLeft: "330px",
    display: "inline",
    position: "relative",
    top: "-190px",
  };
  const textDivA = {
    marginTop: "-2px",
    marginLeft: "-140px",
    display: "inline",
    position: "relative",
    top: "-190px",
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
  const divSt = {
    width: "500px",
    height: "300px",
    position: "relative",
    left: "30vw",
    top: "-140px",
    border: "1px solid rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
  };

  return (
    <div style={{ height: "130vh" }}>
      <TourDetLogo>
        <img src={logo} alt="" />
      </TourDetLogo>

      <SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </SlideShowContainer>
      <LinkList />

      <TourCompanyInfo>
        <h4>Skyvilla Travellers</h4>
        <p>{location}</p>
        <pre>12 reviews</pre>
        <Roomicon>
          <LocalParkingIcon fontSize="large"></LocalParkingIcon>
        </Roomicon>
        <h5>Free Parking</h5>
        <Roomicon1>
          {" "}
          <Diversity3Icon fontSize="large"></Diversity3Icon>
        </Roomicon1>
        <span>
          <h5>Family rooms</h5>
        </span>
      </TourCompanyInfo>

      {!sucessMsg && (
        <>
          <div style={textDiv}>
            <h4 style={packageText}>Booking Detail</h4>
          </div>
          <BookingDet>
            <div style={{ marginLeft: "10px" }}>
              <h2>Booking Details</h2>
              <p>
                <div style={pStyles}>Tour Name:</div>{" "}
                <div style={insideP}>{naam}</div>
              </p>
              <p>
                <div style={pStyles}>Location:</div>{" "}
                <div style={insideP}>&ensp;&ensp;{location}</div>
              </p>
              <p>
                <div style={pStyles}>Price per tourist: $</div>
                {price}
              </p>
              {showTourists && (
                <div>
                  <div style={pStyles}>Tourists Allowed</div>
                  <div style={{ marginLeft: "2px", display: "inline" }}>
                    &ensp;&ensp;{tourists}
                  </div>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    Tourists Travelling:{" "}
                  </label>
                  <input
                    type="number"
                    value={touristsValue}
                    onChange={handleInput}
                    onInput={handleInputChange}
                    // Use min attribute to set the minimum value to 0
                    min="1"
                    style={{
                      position: "absolute",
                      left: "170px",
                      top: "230px",
                    }}
                  />
                </div>
              )}
              {showGoingTourist && (
                <>
                  <div style={pStyles}>Tourists Going</div>&ensp;
                  <h5
                    style={{
                      display: "inline",
                      fontSize: "16px",
                      fontWeight: "normal",
                      marginLeft: "20px",
                    }}
                  >
                    {touristsValue}
                  </h5>
                </>
              )}

              {confirmed && (
                <p>
                  <div style={pStyles}>Amount to Pay: $</div>&ensp;
                  <h4 style={{ display: "inline", fontSize: "20px" }}>
                    {totalPrice}
                  </h4>
                </p>
              )}
              {!confirmed && (
                <Button style={buttonStyle} onClick={handleConfirmBooking}>
                  Confirm Details
                </Button>
              )}
            </div>
          </BookingDet>
          {showAccountDetails && (
            <>
              <div style={textDivA}>
                <h4 style={packageText}>Company Details</h4>
              </div>
              <BookingDet height={350} mgTop={-372} left={760} pr={30}>
                <h2>Company Account Details</h2>
                <p>
                  <div style={pStyles}>Company Name:</div> &ensp;&ensp;
                  {companyAccountDetails.companyName}
                </p>
                <p>
                  <div style={pStyles}>Account Number:</div> &ensp;&ensp;
                  {companyAccountDetails.accountNumber}
                </p>
                <p>
                  <div style={pStyles}>Bank Name:</div>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  {companyAccountDetails.bankName}
                </p>
                <p>
                  <div style={pStyles}>Account Holder:</div>{" "}
                  &ensp;&ensp;&ensp;&nbsp;{companyAccountDetails.accountHolder}
                </p>
                <Button style={buttonStyle} onClick={handleCancelDetailButton}>
                  Cancel Details
                </Button>{" "}
                <Button style={buttonStyle} onClick={handleConfirmBookingOne}>
                  Print
                </Button>
                <Button style={buttonStyle} onClick={handleSuccess}>
                  Book Tour
                </Button>
              </BookingDet>
            </>
          )}{" "}
        </>
      )}
      {sucessMsg && !tourCancelled &&(
        <div style={divSt}>
          <img src={congrat} style={{ height: "40px", width: "40px" }} />
          <pre
            style={{
              display: "inline",
              position: "relative",
              top: "-16px",
              fontSize: "20px",
            }}
          >
            Congratulations tour booked Successfully
          </pre>
          <Button
            onClick={handleDash}
            style={{ marginTop: "30vh", marginLeft: "8px" }}
          >
            Move to Dashboard
          </Button>
          <Button style={{ marginLeft: "50px" }} onClick={cancelTour}>Cancel Tour</Button>
        </div>
      )}
         {sucessMsg && tourCancelled && (
        <div style={divSt}>
          <img src={congrat} style={{ height: "40px", width: "40px" }} />
          <pre
            style={{
              display: "inline",
              position: "relative",
              top: "-16px",
              fontSize: "20px",
            }}
          >
            Tour cancelled successfully
          </pre>
          <Button
            onClick={handleDash}
            style={{ marginTop: "30vh", marginLeft: "8px" }}
          >
            Move to Dashboard
          </Button>
        </div>
      )}
      {
      showNotification && (<>
      
      <NotificationUI message="Tour already booked by you." onHide={hideNotification} position="fixed" left="700px" top="25px"/>
      </>)
      }

      <Footer Top={130} />
      {/* Additional content for payment, confirmation, etc. can be added here */}
    </div>
  );
};

export default TBooking;
