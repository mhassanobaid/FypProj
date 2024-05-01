// SearchBar.js
import React, { useState } from "react";
import SBCss from "../User/SearchBarCss.module.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationUI from "../Common/NotificationUI";
const SearchBar = ({ onSearch }) => {
  // const [location, setLocation] = useState("");
  // const [money, setMoney] = useState("");
  // const [tourists, setTourists] = useState("");
  const [formData, setFormData] = useState({
    location: "",
    money: "",
    tourists: "",
  });
  const [tourc, setTours] = useState([]);
  const [notification, setNotication] = useState(false);

  const handleChangee = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hideNotification = () => {
    setNotication(false);
  };
  const handleSearch = async (tourists, location, money) => {
    // Pass the search criteria to the parent component
                                  //   try {
                                  //     const response = await fetch("http://localhost:8199/ppppp/Demo", {
                                  //       method: "POST",
                                  //       headers: {
                                  //         "Content-Type": "application/json",
                                  //       },
                                  //       body: JSON.stringify({ ...formData, action: "tS" }),
                                  //     });

                                  //     if (response.ok) {
                                  //       try {
                                  //         const toursData = await response.json();
                                  //         setTours(toursData); 
                                  //         //passin to parent
                                          
                                  //       } catch (error) {
                                  //         console.error("Error parsing JSON:", error);
                                  //       }
                                  //     } else {
                                  //       console.error("Failed to fetch data:", response.statusText);
                                  //     }
                                  //   } catch (error) {
                                  //     console.error("Error fetching data:", error);
                                  //   }
                                  // };
                                
                                  console.log(JSON.stringify(formData));
                                  onSearch(formData);
  };

    const setTourist = (ev) => {
                const value = parseInt(ev.target.value) || 0;

                                    // Enforce minimum value of 1
                    const newValue = Math.max(value, 1);

                   setFormData({ ...formData, tourists: newValue })};

  // const handleChange = (e) => {
  //   const input = e.target.value;

  //   // Regular expression to check if the input is numeric
  //   const isNumeric = /^[0-9]*$/.test(input);

  //   // If input is numeric, update the state, otherwise show an alert
  //   if (isNumeric || input === '') {
  //     setMoney(input);
  //   } else {
  //     setNotication(true);
  //   }
  // };

  return (
    <div className={SBCss.searchBarr}>
      {notification && (
        <NotificationUI
          message="Please Enter Numeric Data"
          onHide={hideNotification}
          position="fixed"
          left="550px"
          zIndex={20000}
          top="-40px"
          duration={2000}
        />
      )}
      <TextField
        label="Where to"
        placeholder="Where to"
        name="location"
        onChange={handleChangee}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddLocationIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginLeft: "50px" }}
      />

      <TextField
        label="Amount"
        placeholder="0$"
        name="money"
        onChange={handleChangee}
        className={SBCss.inputField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={SBCss.adornment}>
              <MonetizationOnIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Tourists"
        placeholder="Tourists"
        type="number"
        name="tourists"
        value={formData.tourists}
        onChange={setTourist}
        className={SBCss.inputField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={SBCss.adornment}>
              <PersonAddIcon />
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
