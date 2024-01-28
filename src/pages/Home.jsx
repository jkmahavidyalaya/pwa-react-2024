import React from 'react';
import { Typography, Box } from '@mui/material';

function Home({ user }) {
  return (
    <Box mt={4}>
      <Typography variant="h4" align="center" gutterBottom>Welcome, {user ? user.email : 'Guest'}</Typography>
      <Typography variant="body1" align="center">This is the home page. You can put your content here.</Typography>
    </Box>
  );
}

export default Home;
