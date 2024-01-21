// DashboardCards.js

import React from 'react';

import './DashboardCards.css'; // Create this file for styling

const DashboardCards = () => {
  // Assuming you have the counts available, replace the placeholder values with your actual counts
  const totalUsers = 100;
  const totalTourCompanies = 20;
  const totalTours = 50;

  return (
    <div className="dashboard-cards">
      <div className="card">
        
        <div className="content">
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
      </div>

      <div className="card">
        
        <div className="content">
          <h2>Tour Companies</h2>
          <p>{totalTourCompanies}</p>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h2>Total Tours</h2>
          <p>{totalTours}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
