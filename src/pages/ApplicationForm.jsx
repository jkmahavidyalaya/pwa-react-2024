import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, MenuItem, Box, IconButton, ListItem, List, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Delete as DeleteIcon, CloudUploadOutlined as CloudUploadOutlinedIcon } from '@mui/icons-material';

const ApplicationForm = () => {
  const [selectedForm, setSelectedForm] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedForm, mobileNumber, email, documents });
    // Add logic to submit form data to backend
  };

  const handleFormSelectChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setDocuments([...documents, ...files]);
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom>
        Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              select
              label="Select Form"
              variant="outlined"
              fullWidth
              value={selectedForm}
              onChange={handleFormSelectChange}
              required
            >
              <MenuItem value="form1">Form 1</MenuItem>
              <MenuItem value="form2">Form 2</MenuItem>
              {/* Add more options for other forms */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="upload-document">
              <input
                id="upload-document"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                multiple
                style={{ display: 'none' }}
              />
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUploadOutlinedIcon />}
              >
                Upload Documents
              </Button>
            </label>
            <Box mt={2}>
              <Typography variant="body1">Selected Documents:</Typography>
              <List>
                {documents.map((file, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText primary={file.name} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => handleRemoveDocument(index)} size="small">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ApplicationForm;
