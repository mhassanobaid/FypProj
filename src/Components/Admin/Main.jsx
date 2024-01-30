// Main.js

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Home from './Home';
import UserData from './UserData';
import TourCompanyData from './TourCompanyData';
import TourCompany from './TourCompanyData';
import TourData from './ToursData';


const Main = () => {
  return (
    <>
      <Navbar />
      <div className="row-container">
        <div className='compos'>
          <Sidebar />
        </div>
        <div className='compos'>
          {/* <DashboardCards /> */}
          <Home />
          <UserData />
          <TourCompanyData/>
          <TourData/>
          {/* <User/> */}
        </div>
      </div>
    </>
  );
};

export default Main;
