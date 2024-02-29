import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TourDetLogo,TourDetailDv, OuterTourDet, Button, SlideShowContainer } from '../../Components/Common/Components';
import logo from '../../Assets/images/logo.png';
import Mapp from '../../Assets/images/map.jpg';
import Footer from '../../Components/Common/Footer';
import LinkList from '../../Components/Common/LinkList';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Components/User/UserContext';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import NotificationUI from '../../Components/Common/NotificationUI'


const UTourDetails = () => {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  const loc = useLocation();
  const tours = loc.state?.Tours ?? [];
  const favoritess = user && user.favorites ? user.favorites : [];

  const tourId = loc.state?.TourId ?? '';
  const fromFav = loc.state.fromFav?loc.state.fromFav:0;
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationa, setShowNotificationa] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
  };
  const hideNotificationa=()=>{
    setShowNotificationa(false);
  }
  // const [fromFav, setFromFav] = useState(false);

  {/*useEffect(() => {
    if (loc.state && loc.state.fromFav) {
      setFromFav(true);
    }
  }, [loc]);*/}

  // if (!tours.length) {
  //   return <div>Tours not available</div>;
  // }

  const selectedTour = fromFav?(favoritess.find((tour) => tour.tId === tourId)): tours.find((tour) => tour.id === tourId);

  
  if (!selectedTour) {
   
   console.log(favoritess)
console.log(   typeof(tourId));
console.log(fromFav);

    return <div>Tour not found</div>;
  }

  const { id, naam, image, location, price, tourists,departureDate,description } = selectedTour;
  const handleBookPackage = () => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
    console.log(currentDateString);
    // Check if current date is less than or equal to departure date and tourists is greater than 1
    if (user) {
    if (currentDateString <= departureDate && tourists > 1) {
      // Assuming you have a route named '/account-details'
      
        if (selectedTour) {

          const isTourAlreadyBooked = user.bookedTours.some((tour) => tour.id === id);
          console.log(isTourAlreadyBooked+"jh");
          // Update user context with selected tour details
          if(!isTourAlreadyBooked){
          updateUser({
            ...user,
            selectedTour: {
              id: selectedTour.id,
              naam: selectedTour.naam,
              location: selectedTour.location,
              price: selectedTour.price,
              tourists: selectedTour.tourists,
              image: selectedTour.image,
              departureDate: selectedTour.departureDate,
              description: selectedTour.description
              
              // Add other tour details as needed
            },
            
          });
          console.log(user);
          navigate('/tbooking');}
          else{
            setShowNotificationa(true);
          }
        } else {
          console.error('Selected tour not found');
        }
       
    } else {
      // Provide a message or handle the case where the conditions are not met
      setShowNotification(true);
    }}
    else {
      alert('Please login first');
    }
  };
  
  
 const containerStyles={
  width:'100vw',
  height: '30vh',
  margin: '0 auto',
  zIndex:'300'
 }

 const dvSt = {
    width:'20vw',
    height:'30vh',
    backgroundColor:'skyblue',
   
    display:'inline',
    position:'absolute',
    left:'30px',
    top:'180px'
 }

 const slideSty = {
 
  backgroundImage:`url(${Mapp})`,
  width:"100%",
  height:"100%",
  
  backgroundPosition: "center",
  backgroundSize:"cover"
  
}
const sliderSty = {
  height:"100%",
  position: "relative"
}

const textDiv = {
  marginBottom: '11px',
  marginLeft:'350px'
}
const packageText={

  display: 'inline',
  fontSize: '20px',
  marginLeft: '9px',
  marginTop: '9px',
  paddingTop: '20px',
  textDecoration: 'underline',
  textDecorationColor: '#1174D4'

}
const pcStyle = {
  marginLeft: '-68px',
  display:'inline'
}
  return (
    
    <div style={{height: '130vh'}}>
       
      <SlideShowContainer>
      <ImageSlideshow interval={2000} />
      </SlideShowContainer>
       
    <TourDetLogo>
    <img src={logo} alt="" /></TourDetLogo>
    <LinkList  />
    {/* width="20vw" height="30vh" color="skyblue" pos="relative" left="-500px" top="60px" */}
     <a href="https://www.google.com/maps/place/Murree,+Rawalpindi,+Punjab,+Pakistan/@33.9037852,73.3547466,13z/data=!3m1!4b1!4m6!3m5!1s0x38dfd715776097a9:0x17b2e1d6bfb8e190!8m2!3d33.9069576!4d73.3943017!16zL20vMDQwaDFq?entry=ttu" target='_blank'><div style={dvSt}   >

    <div style={sliderSty}>
      <div style={slideSty}>

      </div>
    </div>

    </div></a>
    <div style={textDiv}>
              <h4 style={packageText}>Package Detail</h4>
            </div>
            {showNotification && <NotificationUI message="The departure date has passed, so you cannot book this package." onHide={hideNotification} position="absolute" left="56vw" top="150px" />}
    <OuterTourDet>
      
    <TourDetailDv>
      <h2 style={{marginLeft:'10px'}}>{naam} <span style={{ fontSize: '0.6em', verticalAlign: 'sub',fontFamily: 'times new roman' }}>by Abc Travellers</span></h2>
      <div style={{marginLeft:'10px'}}><p style={{}}><div style={{display:'inline',margin:'0px',padding:'0px',fontWeight:'bold',marginRight:'100px'}}>Price per Tourist: $</div><div style={pcStyle}>{price}</div></p>
      <p><div style={{display:'inline',margin:'0px',padding:'0px',fontWeight:'bold',marginRight:'100px'}}>Location: </div>{location}</p>
      <p><div style={{display:'inline',margin:'0px',padding:'0px',fontWeight:'bold',marginLeft:'76x'}}>Tourists Allowed</div><div style={{display:'inline',marginLeft:'44px'}}>{tourists}</div></p>
      <p><div style={{display:'inline',margin:'0px',padding:'0px',fontWeight:'bold',marginRight:'94px'}}>Departure</div>{departureDate}</p>
      <p><div style={{display:'inline',margin:'0px',padding:'0px',fontWeight:'bold',marginRight:'50px'}}>Description</div><div style={{marginLeft:'32px',display:'inline'}}>{description}</div></p>
      </div>

      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',marginLeft:'170px',marginTop:'40px'}}>
        <h3>Image</h3>
        <div>
          <img src={image} alt="Tour" />
        </div>
      </div>
      <Button style={{position:'relative',top:'70px',left:'250px'}} onClick={handleBookPackage}>Book Package</Button>
      </TourDetailDv>
      
      </OuterTourDet>
      {showNotificationa && <NotificationUI message="Tour already added booked." onHide={hideNotificationa} position="fixed" left="700px" top="25px"/>}
      <Footer Top={120}/>
      </div>
      
  );
};

export default UTourDetails;