import React from 'react';
import { Typography, Box, Button, Grid, Paper } from '@mui/material';

function Home({ user, onLogout }) {
    return (
        <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>Welcome, {user.email}</Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <Typography variant="h5" align="center" gutterBottom>Recent Applications</Typography>
                        {/* Display recent application details here */}
                        {/* Example: */}
                        <Typography variant="body1">You have applied to 3 jobs and 2 government certificates recently.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <Typography variant="h5" align="center" gutterBottom>Application Status</Typography>
                        {/* Display application status or progress summary here */}
                        {/* Example: */}
                        <Typography variant="body1">You have 2 pending applications and 1 application awaiting verification.</Typography>
                    </Paper>
                </Grid>
                {/* Add more sections as needed */}
            </Grid>
            <Box mt={3} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>
            </Box>
        </Box>
    );
}

export default Home;
