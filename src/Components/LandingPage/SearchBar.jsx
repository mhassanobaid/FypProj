// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [money, setMoney] = useState('');
  const [tourists, setTourists] = useState('');

  const handleSearch = () => {
    // Pass the search criteria to the parent component
    onSearch({ location, money, tourists });
  };

  return (
    <div>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Money:
        <input type="text" value={money} onChange={(e) => setMoney(e.target.value)} />
      </label>
      <label>
        Number of Tourists:
        <input type="number" value={tourists} onChange={(e) => setTourists(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
