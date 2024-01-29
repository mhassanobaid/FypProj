// TourCompany.js

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import './TourCompanyData.css';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'name', label: 'Company Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phone',
    label: 'Contact',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'registration_no',
    label: 'Registration No',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'status', label: 'Status', minWidth: 100, align: 'center' },
  { id: 'actions', label: 'Actions', minWidth: 200, align: 'center' },
];

const rows = [
  { id: 1, name: 'Company A', email: 'companyA@example.com', phone: '1234567890', registration_no: 'ABC123', status: 'Approved' },
  { id: 2, name: 'Company B', email: 'companyB@example.com', phone: '9876543210', registration_no: 'XYZ789', status: 'Pending' },
  { id: 2, name: 'Company B', email: 'companyB@example.com', phone: '9876543210', registration_no: 'XYZ789', status: 'Pending' },
  { id: 2, name: 'Company B', email: 'companyB@example.com', phone: '9876543210', registration_no: 'XYZ789', status: 'Pending' },
  { id: 2, name: 'Company B', email: 'companyB@example.com', phone: '9876543210', registration_no: 'XYZ789', status: 'Pending' },
 
  // Add more rows as needed
];

const getStatusColor = (status) => {
  return status === 'Approved' ? 'green' : 'red';
};
// ... (Previous functions and data)

const TourCompanyData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewClick = (companyId) => {
    // Placeholder function for view action
    console.log(`View clicked for company with ID: ${companyId}`);
  };

  const handleDeleteClick = (companyId) => {
    // Placeholder function for delete action
    console.log(`Delete clicked for company with ID: ${companyId}`);
  };

  return (
    <>
    <section>
    <div className="tourCompanyContainer">
      <h2>Tour Companies</h2>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];

                        if (column.id === 'status') {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                color: getStatusColor(value),
                                fontWeight: 'bold',
                              }}
                            >
                              {value}
                            </TableCell>
                          );
                        }

                        if (column.id === 'actions') {
                          return (
                            <div key={column.id} align={column.align} className='actoin_btns'>
  <div className='action_btn_box'>
    <Button
      className='viewButton' // Add this class for the blue color
      variant="contained"
      color="primary"
      onClick={() => handleViewClick(row.id)}
    >
      View
    </Button>
  </div>
  <div className='action_btn_box'>
    <Button
      className='deleteButton' // Add this class for the red color
      variant="contained"
      color="secondary"
      onClick={() => handleDeleteClick(row.id)}
    >
      Delete
    </Button>
  </div>
</div>

                          );
                        }

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
    </section>
    </>
  );
};

export default TourCompanyData;