// SearchBar.js
import React, { useState } from 'react';
import '../LandingPage/SearchBarCss.css'
const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [money, setMoney] = useState('');
  const [tourists, setTourists] = useState('');

  const handleSearch = () => {
    // Pass the search criteria to the parent component
    onSearch({ location, money, tourists });
  };

  return (
    <div className='searchBarr'>
      <label>
      <img src="/icons/locationIcon.png" alt="loc" height="31px" width="30px" className='img-Loc'/>
        <input type="text" placeholder="Where to" value={location} onChange={(e) => setLocation(e.target.value) } />
        
      </label>
      <label>
      <img src="/icons/amountIcon.png" alt="loc" height="31px" width="30px" className='img-Loc'/>
        <input type="text" placeholder="0$" value={money} onChange={(e) => setMoney(e.target.value)} />
      </label>
      <label>
      <img src="/icons/touristIcon.png" alt="loc" height="31px" width="30px" className='img-Loc'/>
        <input type="number" placeholder='Tourists' value={tourists} onChange={(e) => setTourists(e.target.value)} />
      </label>
      <button onClick={handleSearch} className='button-search-bar'>Search</button>
    </div>
  );
};

export default SearchBar;
