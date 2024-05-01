import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './UserData.css';

const UserData = () => {
  const [rows, setRows] = useState([]);

  const handleViewClick = (userId) => {
    console.log(`View clicked for user ID: ${userId}`);
  };

  const handleDeleteClick = (userId) => {
    console.log(`Delete clicked for user ID: ${userId}`);
  };

  useEffect(() => {
    // Fetch user data from the server
    axios.get('http://localhost:8199/ppppp/AdminUserRet')
      .then(response => {
        // Set the fetched data to the state
        setRows(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'fname', headerName: 'First name', width: 150, editable: true },
    { field: 'lname', headerName: 'Last name', width: 150, editable: true },
    { field: 'email', headerName: 'Email', type: 'email', width: 200, editable: true },
    { field: 'contact_no', headerName: 'Phone', type: 'number', width: 150, editable: true },
    
  ];

  return (
    <section>
      <div className="userDataContainer">
        <h2>UserData</h2>
        <Box className="dataGridContainer">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            
          />
        </Box>
      </div>
    </section>
  );
};

export default UserData;
