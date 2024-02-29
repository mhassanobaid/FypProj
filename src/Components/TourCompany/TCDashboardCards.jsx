// DashboardCards.js

import React from 'react';

import  d from './TCDashboardCards.module.css'; // Create this file for styling

const TCDashboardCards = () => {
  // Assuming you have the counts available, replace the placeholder values with your actual counts
  const totalUsers = 100;
  const totalTourCompanies = 20;
  const totalTours = 50;

  return (
    <div className={d.dashboard_cards}>
      <div className={d.card}>
        
        <div className={d.content}>
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
      </div>

      <div className={d.card}>
        
        <div className={d.content}>
          <h2>Tour Companies</h2>
          <p>{totalTourCompanies}</p>
        </div>
      </div>

      <div className={d.card}>
        <div className={d.content}>
          <h2>Total Tours</h2>
          <p>{totalTours}</p>
        </div>
      </div>
    </div>
  );
};

export default TCDashboardCards;
