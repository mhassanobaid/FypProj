import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import u from './TCUserData.module.css';

const TCUserData = () => {
  const [rows, setRows] = useState([]);

  const handleDetail = (userId) => {
    // Implement your detail logic here
    console.log('View details for user ID:', userId);
  };

  const handleDelete = (userId) => {
    // Implement your delete logic here
    console.log('Delete user ID:', userId);
  };
  const handleViewClick = (companyId) => {
    // Placeholder function for view action
    console.log(`View clicked for company with ID: ${companyId}`);
  };

  const handleDeleteClick = (companyId) => {
    // Placeholder function for delete action
    console.log(`Delete clicked for company with ID: ${companyId}`);
  };


//   useEffect(() => {
//     // Fetch user data from your API
//     axios.get('your-api-endpoint')
//       .then(response => setRows(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
useEffect(() => {
    // Dummy data for testing
    const dummyData = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      firstName: `First${index + 1}`,
      lastName: `Last${index + 1}`,
      email: `user${index + 1}@example.com`,
      phone: 1234567890 + index,
    }));

    setRows(dummyData);
  }, []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 200,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div className={u.actionsCell}>
          <IconButton
                                    className={u.editButton} // Add this class for the blue color
                                    color="primary"
                                    onClick={() => handleViewClick("")}
                                  >
                                    <EditIcon />
                                  </IconButton>
          <IconButton
          className={u.deleteButton} // Add this class for the red color
          color="secondary"
          onClick={() => handleDeleteClick("")}
        >
    <DeleteIcon />
  </IconButton>
          
        </div>
      ),
    },
  ];

  return (
    <>
    <section>
    <div className={u.userDataContainer}>
      <h2>UserData</h2>
      <Box className={u.dataGridContainer}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
    </section>
    </>
  );
};

export default TCUserData;