import './App.css';
<<<<<<< HEAD
import Main from './Components/Admin/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/admin/Dashboard';
import UserDataRoute from './pages/admin/UserDataRoute';
import TCDataRoute from './pages/admin/TCDataRoute';
import TourDataRoute from './pages/admin/TourDataRouter';

=======

import SignUpForm from './Components/Admin/SignUpForm';
import Footer from './Components/LandingPage/headerFooterComp/Footer';
import Header from './Components/LandingPage/headerFooterComp/Header';
import SearchBar from './Components/LandingPage/SearchBar';
import TourCard from './Components/LandingPage/TourCard';
import ReviewSlider from './Components/LandingPage/ReviewSlider';

import Navbar from './Components/Admin/Navbar';
//import SignUpForm from './Components/Admin/Navbar';
>>>>>>> 15c8ce7c434a96c98c6ad25b0b846d3e19846ff5

function App() {

  
    const tours = [
      {
        id: 1,
        naam: 'NathiaGali Expendition',
        image: '/images/murree.jpg',
        location: 'NathiaGali',
        price: 99,
        tourists: 20,
      },
      {
        id: 2,
        naam: 'Murree Journey',
        image: '/images/kalarkahaar.jpg',
        location: 'Murree Expedition',
        price: 149,
        tourists: 15,
      },
      {
        id: 3,
        naam: 'KalarKahaar Journey',
        image: '/images/nathiagali.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },
      {
        id: 4,
        naam: 'KalarKahaar Journey',
        image: '/images/neelumValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },{
        id: 5,
        naam: 'KalarKahaar Journey',
        image: '/images/swatValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },{
        id: 6,
        naam: 'KalarKahaar Journey',
        image: '/images/nelumValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      }



      // Add more tours as needed
    ];
   

  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserDataRoute />} />
            <Route path="/tour-company" element={<TCDataRoute />} />
            <Route path="/tours" element={<TourDataRoute />} />

        </Routes>
      </BrowserRouter>
      
=======

    {/*<SignUpForm/>*/}

    
            {/* Your main content goes here */}
            <Header/>
           
            <main className='main-in-app'>
              <div className='text-div'><h4 className='package-text'>Packages</h4></div>
            <div className="tour-card-container"> 
            {tours.map((tour) => (
            <TourCard
              key={tour.id}
              naam = {tour.naam}
              image={tour.image}
              location={tour.location}
              price={tour.price}
              tourists={tour.tourists}
            />
              ))}
      
          </div>
        
            <section className='review-land' id='rv-land'>
              <h3 className='h1-in-rv'>What Users say about us</h3>
            
                <ReviewSlider/>


            </section>
            
            </main>
            <Footer className="footer-in-main"/>
            
            



>>>>>>> 15c8ce7c434a96c98c6ad25b0b846d3e19846ff5
    </div>
  );
}

export default App;
