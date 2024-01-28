import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

function Login({ onLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        // Simulating successful login
        const userData = { email: formData.email }; // Replace with actual user data
        onLogin(userData);
    };

    return (
        <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">Login</Button>
                </Box>
            </form>
        </Box>
    );
}

export default Login;
