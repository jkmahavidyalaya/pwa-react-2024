// Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar'; // Importing Navbar component

function Header({ loggedIn, onLogout }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student App
        </Typography>
      </Toolbar>
      <Navbar isOpen={isNavbarOpen} loggedIn={loggedIn} onLogout={onLogout} onClose={() => setIsNavbarOpen(false)} />
    </AppBar>
  );
}

export default Header;
