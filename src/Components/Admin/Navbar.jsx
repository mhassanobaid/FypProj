// Navbar.js

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import mylogo from '../../Assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import DashboardCards from './DashboardCards';

import Home from './Home';
import UserData from './UserData';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('user'); // Default search type
  const [isScrolled, setIsScrolled] = useState(false);
  

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="left-section">
          <img src={mylogo} alt="Logo" className="logo" />
          
        </div>
        <div className="center-section">
   
            <select value={searchType} onChange={handleSearchTypeChange}>
              <option value="user">User</option>
              <option value="tourcompany">Tour Company</option>
              <option value="tours">Tours</option>
            </select>
          
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="right-section">
         
          <FontAwesomeIcon icon={faEnvelope} className='notification_icon' />
        </div>
      </div>
      <div className="row-container">
      <div className='compos'>
      {/* <Sidebar /> */}
      </div>
      <div className='compos'>
      {/* <DashboardCards /> */}
      {/* <Home/>
      <UserData/> */}
      {/* <User/> */}
      </div>
      </div>
    </>
  );
};

export default Navbar;
