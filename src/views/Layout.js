import React from 'react';
import NavBar from '../components/navigation/NavBar'; // Adjust the import path if necessary
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <Box sx={{ bgcolor: 'background.paper', minHeight: '100vh', padding: 0, margin: 0 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;