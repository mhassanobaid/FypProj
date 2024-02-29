// Main.js

import React from 'react';
import TCNavbar from './TCNavbar';
import TCSidebar from './TCSidebar';
import TCHome from './TCHome';
import TCUserData from './TCUserData';
import TCTourCompanyData from './TCTourCompanyData';
import TCTourData from './TCToursData';

import m from './TCMain.module.css';


const TCMain = () => {
  return (
    <>
    <div>
      <TCNavbar />
      </div>
      <div className={m.main}>
      <div className={m.row_container}>
       
          <TCSidebar />
        
        <div className={m.compos}>
          {/* <DashboardCards /> */}
          <TCHome />
          <TCUserData />
          <TCTourCompanyData/>
          <TCTourData/>
          {/* <User/> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default TCMain;
