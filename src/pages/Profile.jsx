import React, { useState } from 'react';
import { Typography, Box, Button, TextField, Grid, Paper, Divider } from '@mui/material';

function Profile({ user, onUpdateProfile, onCancel }) {
    const [editedData, setEditedData] = useState(user);
    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        onUpdateProfile(editedData);
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditedData(user);
        setEditMode(false);
        onCancel();
    };

    return (
        <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>Profile</Typography>
            <Paper elevation={3} style={{ padding: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={editedData.name}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            disabled={!editMode}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={editedData.email}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            disabled={!editMode}
                        />
                    </Grid>
                    {/* Add more fields as needed */}
                </Grid>
                <Box mt={3}>
                    <Divider />
                </Box>
                <Box mt={3} display="flex" justifyContent="flex-end">
                    {!editMode && (
                        <Button variant="outlined" onClick={handleEdit}>Edit</Button>
                    )}
                    {editMode && (
                        <>
                            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: 10 }}>Save</Button>
                            <Button variant="outlined" color="secondary" onClick={handleCancel} style={{ marginLeft: 10 }}>Cancel</Button>
                        </>
                    )}
                </Box>
            </Paper>
        </Box>
    );
}

export default Profile;
