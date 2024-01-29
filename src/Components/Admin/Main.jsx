// Main.js

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import UserData from './UserData';
import TourCompanyData from './TourCompanyData';
import TourData from './ToursData';

import './Main.css';


const Main = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className='main'>
      <div className="row-container">
       
          <Sidebar />
        
        <div className='compos'>
          {/* <DashboardCards /> */}
          <Home />
          <UserData />
          <TourCompanyData/>
          <TourData/>
          {/* <User/> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Main;
