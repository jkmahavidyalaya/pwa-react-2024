import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Navbar({ isOpen, loggedIn, onLogout, onClose }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div style={{ marginTop: '64px', width: '250px' }}>
        <List>
          <ListItem button component={Link} to="/" onClick={onClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Home</Typography>} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {loggedIn ? (
            <ListItem button onClick={onLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1">Logout</Typography>} />
            </ListItem>
          ) : (
            <>
              <ListItem button component={Link} to="/login" onClick={onClose}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Login</Typography>} />
              </ListItem>
              <ListItem button component={Link} to="/register" onClick={onClose}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Register</Typography>} />
              </ListItem>
            </>
          )}
        </List>
        <Footer />
      </div>
    </Drawer>
  );
}

export default Navbar;
