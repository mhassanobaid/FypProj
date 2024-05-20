import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from '../../Assets/images/logo.png';
import { TourCardd,TourDetailDv, OuterTourDet, TourDetImg, TourDetLogo, Button, Input, SlideShowContainer, TourCompanyInfo, Roomicon, Roomicon1, BookingDet } from '../../Components/Common/Components';
import LinkList from '../../Components/Common/LinkList';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import Footer from "../../Components/Common/Footer";
import { FaStar } from 'react-icons/fa';
import HCs from "../../Assets/styles/TReviewCss.module.css";
import { useUser } from '../../Components/User/UserContext';
import {useNavigate} from 'react-router-dom';
const TReview = () => {
  // Extract the tourId from the URL parameters
  const loc = useLocation();
  const tours = loc.state?.Tour ?? {};
  const tourId = loc.state?.TourId ?? "";
  const tourCompName = loc.state?.TCName ?? "";
  const { user, updateUser } = useUser();

  // State for storing the rating and comment
  const [rating, setRating] = useState("1");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Rating:", rating);
    // Send the review data to the server
    console.log("COMMENT"+comment);
    let p = 20;
    try {
      const response = await fetch("http://localhost:8199/ppppp/AdminUserRet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ tourId, rating, comment, action: "submitReview", userid: p }),
        body: JSON.stringify({
          action: "submitReview",
          tourid: tourId,
          userid: user.id,
          comnt: comment,
          rting: rating
        })
      });
      
      if (response.ok) {
        const result = await response.text();
        console.log("JEET KE LAGAN");
        setMessage("Review submitted successfully!"); // Set success message
        setTimeout(() => {
          navigate("/"); // Redirect to homepage after 5 seconds
        }, 10000);
      } else {
        throw new Error("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Error submitting review. Please try again.");
    }
  };

  // StarRating component to allow users to select rating
  const StarRating = ({ selectedRating, onRatingClick }) => {
    return (
      <div>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 10, cursor: 'pointer', color: ratingValue <= selectedRating ? 'gold' : 'gray' }}
              onClick={() => onRatingClick(ratingValue)}
            />
          );
        })}
      </div>
    );
  };
  const dvSt = {
    display: "inline",
    
    fontWeight: "bold",
    
    
  };


  const dvSta = {
    display: "inline",
    fontWeight: "bold",
  };
  console.log(tours);
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>



{message && <p style={{ color: 'red',position:'absolute',top:'215px',left:'405px',fontWeight:'bold',fontSize:'24px', whiteSpace: 'nowrap',zIndex:'20000' }}>{message}</p>} {/* Display success or error message */}
       <div className={HCs.textDiv}>
              <h4 className={HCs.packageText}>Tour Review</h4>
            </div>
      <TourDetLogo>
        <img src={logo} alt="" />
      </TourDetLogo>
      <SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </SlideShowContainer>
      <LinkList />
      <TourCardd marginTop="50px" marginLeft="400px" width="700px" height="350px">
      <h2>Submit Your Review</h2>
      <h4 style={{position:'absolute',left:'830px',top:'200px'}}>{tours.title}</h4>
      <h4>By {tourCompName}</h4>
      <img
                          src={tours.image_url}
                          alt="Tour"
                          style={{
                            width: "200px",
                            position:'absolute',
                          top:'250px',
                          left:'820px'
                          }}  />

<div style={{position:'absolute',left:'825px',top:'370px'}}>
                          <h3
                            style={{position:'absolute', fontSize: "1.17em", fontWeight: "bold",left:'835px',top:'370px' }}
                          >
                            <div class={HCs.tct}>{tours.title}</div>
                          </h3>
                      
                          <p>
                            <div style={dvSt}>Price per tourist:</div>
                            &ensp;&ensp;&ensp;&ensp;
                            <div class={HCs.tcts}>
                              <strong>{tours.price}$</strong>
                            </div>
                          </p>
                          <p>
                            <div style={dvSt}>Tourists Went:</div>
                            &ensp;&nbsp;
                            <div class={HCs.tct}>
                              {tours.tourists_going}
                            </div>
                          </p>
                          <p>
                            <div style={dvSt}>Departure Date:</div>&ensp;&nbsp;
                            <div class={HCs.tct}>{tours.departure_date}</div>
                          </p>
                          <p>
                            <div style={dvSt}>Number of Days:</div>&ensp;&nbsp;
                            <div class={HCs.tct}>{tours.number_of_days}</div>
                          </p>
                          <div style={dvSta}>Booked At:</div>
                          &ensp;
                          <div className={HCs.tcts}>
                            {" "}
                            {new Date(tours.bookedAt).toLocaleString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </div>
                         
                        </div>
      <form onSubmit={handleSubmit}>
        <div style={{marginLeft:'120px'}}>
          <label style={{position:'absolute',left:'430px',top:'330px'}}>Rating:</label>
          
          <StarRating
            selectedRating={rating}
            onRatingClick={(selectedRating) => setRating(selectedRating)}
            
          />
        </div>
        <div>
          <label style={{marginLeft:'18px'}} htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            width="30px"
            height="30px"
            style={{ width: '300px', height: '100px', position: 'absolute', left: '430px', top: '400px' }}
          />
        </div>
        <Button type="submit" style={{marginLeft:'100px',marginTop:'140px'}}>Submit</Button>
      </form>
      </TourCardd>
      <Footer style={{ position: "absolute", bottom: 0, width: "100%" }} />
    </div>
  );
};

export default TReview;
