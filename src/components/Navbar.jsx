import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, AccountCircle as AccountCircleIcon, Description as DescriptionIcon, AssignmentTurnedIn as AssignmentTurnedInIcon, ExitToApp as ExitToAppIcon, Info as InfoIcon, ContactSupport as ContactSupportIcon } from '@mui/icons-material';
import Footer from './Footer';

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
          <ListItem button component={Link} to="/profile" onClick={onClose}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Profile</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/application-form" onClick={onClose}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Application Form</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/application-status" onClick={onClose}>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Application Status</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={onClose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">About</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={onClose}>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Contact</Typography>} />
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
            <ListItem button component={Link} to="/login" onClick={onClose}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1">Login</Typography>} />
            </ListItem>
          )}
        </List>
        <Footer />
      </div>
    </Drawer>
  );
}

export default Navbar;
