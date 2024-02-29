import React, { useState } from 'react';
import { useUser } from '../../Components/User/UserContext';
import { TourCardd,TourCardContainerr,HDef,TourDetailDv,OuterTourDet,TourDetImg,TourDetLogo,Button,SlideShowContainer,TourCompanyInfo,Roomicon,Roomicon1,BookingDet } from '../../Components/Common/Components';
import { useNavigate,useLocation } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import bgImg from '../../Assets/images/sgnUp2a.jpg';
import LinkList from '../../Components/Common/LinkList';
import Footer from '../../Components/Common/Footer';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TBookingPdf from './TBookingPdf';
import TFCSS from '../../Assets/styles/TFavCss.module.css';

const TFav = ()=>{

  const { user } = useUser();
  const favoriteTours = user?.favorites || [];
  const bookedTours = user?.bookedTours || [];
  const navigate = useNavigate();
  const loc = useLocation();
  const queryParams = new URLSearchParams(loc.search);
  const source = queryParams.get('source');

  if (!user || !user.selectedTour) {
    navigate('/');
    return null;
  }
  const handleAnchorClick = (tourd) => {
    
    // Navigate to TourDetails page with the selected tourId
    
  
      // Navigate to TourDetails page with the selected tourId
      console.log(tourd);
      navigate("/tourdet", { state: { TourId: tourd, fromFav: 1} });
    
  };
const wese = ()=>{
  console.log(typeof(favoriteTours));
  console.log(source+"dasdasd")
}
  const dvSt={
    display: 'inline',
    fontWeight:'bold'
  }
  const dvSta={
    
    display: 'inline',
    fontWeight:'bold',
    
  }
return(
<div style={{ minHeight: '100vh', position: 'relative' }}>

      
<TourDetLogo>
<img src={logo} alt="" /></TourDetLogo>

<SlideShowContainer>
  <ImageSlideshow interval={2000} />
  </SlideShowContainer>
  <LinkList  />
  {source=='f1' &&(<>
  <HDef>
  <h2>Favorite Tours</h2></HDef>
  <div class={TFCSS.dvv}>
    {favoriteTours.length===0?(
        <div className={TFCSS.noFavorites}>
          <p>Not Favorite Tours yet</p>
        </div>
      ):(
  <TourCardContainerr >
  {favoriteTours.map((tour, index) => (
  <a key={index} onClick={() => handleAnchorClick(tour.tId)} style={{ textDecoration: 'none' }}>
    <div class={TFCSS.insiDv}><TourCardd>
      {/* Render tour details here */}
      <img src={tour.image} alt="Tour" />
      <div>
        <h3 style={{fontSize:'1.17em',fontWeight:'bold'}}><div class={TFCSS.tct}>{tour.naam}</div></h3>
        <p><div style={dvSt}>Location:</div>&ensp;<div class={TFCSS.tct}>{tour.location}</div></p>
        <p><div style={dvSt}>Price per tourist:</div>&ensp;&ensp;&ensp;&ensp;<div class={TFCSS.tcts}><strong>{tour.price}$</strong></div></p>
        <p><div style={dvSt}>Tourists:</div>&ensp;&nbsp;<div class={TFCSS.tct}>{tour.tourists}</div></p>
        
      </div>
    </TourCardd></div>
  </a>
))}
      </TourCardContainerr>)}
      </div>
      </>)}
      {source=='b2' &&(<>
  <HDef>
  <h2>Booked Tours</h2></HDef>
  <div class={TFCSS.dvv}>
    {bookedTours.length===0?(
        <div className={TFCSS.noFavorites}>
          <p>Not Booked Tours yet</p>
        </div>
      ):(
  <>
    
  {bookedTours.map((tour, index) => (
  
  <div style={{ display: 'flex', flexDirection: 'row',marginBottom:'10px' }}>
  {/* Render tour details here */}
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '300px',border:'1px solid grey',width:'700px' }}> {/* Encapsulate the tour card content */}
    <img src={tour.image} alt="Tour" style={{width:'450px',height:'200px',marginTop:'35px',marginLeft:'5px'}} />
    <div style={{ width: '100%', marginLeft: '10px',backgroundColor:'antiquewhite',padding:'10px' }}>
      <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }}>
        <div className={TFCSS.tct}>{tour.naam}</div>
      </h3>
      <p><div style={dvSta}>Location:</div>&ensp;<div className={TFCSS.tct}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{tour.location}</div></p>
      <p><div style={dvSta}>Price per tourist:</div>&ensp;&ensp;<div className={TFCSS.tcts}>{tour.price}$</div></p>
      <p><div style={dvSta}>Tourists Allowed:</div>&ensp;&nbsp;<div className={TFCSS.tcts}>{tour.tourists}</div></p>
      <p><div style={dvSta}>Tourists Going:</div>&ensp;&ensp;&ensp;&nbsp;<div className={TFCSS.tcts}>{tour.touristsValue}</div></p>
      <p><div style={dvSta}>Total Amount:</div>&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;<div className={TFCSS.tcts}>{tour.totalPrice}$</div></p>
      <p><div style={dvSta}>Departure Date:</div>&ensp;&ensp;&nbsp;<div className={TFCSS.tcts}>{tour.departureDate}</div></p>
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
      </>)}
      </div>
      </>)}

      <button onClick={wese}>hjhjj</button>
  <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }}/>
  </div>);

}
export default TFav;