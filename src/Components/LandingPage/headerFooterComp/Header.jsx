
import React from 'react';
import './HeaderCss.css';
import '../SearchBar'
import SearchBar from '../SearchBar';


const Header = () => {

  const handleSearch = (searchCriteria) => {
    // Handle the search criteria, e.g., make an API call
    console.log('Search Criteria:', searchCriteria);
  };

  return (
    <header>
      <video autoPlay loop muted playsInline className="header-video">
        <source src="/videos/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='search-bar'><SearchBar onSearch={handleSearch}  /></div>
      <div className="content">
       
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Signup</a></li>
            <li ><a className="li-fifth" href="#">Login</a></li>
          </ul>
         
        </nav>
       
      </div>
    </header>
  );
}

export default Header;
