// SearchBar.js
import React, { useState } from 'react';
import SBCss from '../User/SearchBarCss.module.css';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [money, setMoney] = useState('');
  const [tourists, setTourists] = useState('');
  
  

  const handleSearch = () => {
    // Pass the search criteria to the parent component
    onSearch({ location, money, tourists });
  };

  return (
    <div className={SBCss.searchBarr}>
    <TextField
      label="Where to"
      placeholder="Where to"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            <AddLocationIcon />
          </InputAdornment>
        ),
      }}
      style={{ marginLeft: '50px' }}
    />

    <TextField
      label="Amount"
      placeholder="0$"
      value={money}
      onChange={(e) => setMoney(e.target.value)}
      className={SBCss.inputField}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={SBCss.adornment}>
           <MonetizationOnIcon/>
          </InputAdornment>
        ),
      }}
    />

    <TextField
      label="Tourists"
      placeholder="Tourists"
      type="number"
      value={tourists}
      onChange={(e) => setTourists(e.target.value)}
      className={SBCss.inputField}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={SBCss.adornment}>
            <PersonAddIcon/>
          </InputAdornment>
        ),
      }}
    />

    <button onClick={handleSearch} className={SBCss.buttonSearchBar}>
      Search
    </button>
  </div>
  );
};

export default SearchBar;
