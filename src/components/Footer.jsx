// Footer.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="absolute" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" align="center" sx={{ width: '100%' }}>
          &copy; {new Date().getFullYear()} Student
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
