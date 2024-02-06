import React, { useState, useEffect } from 'react';
import { Typography, Container, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function ApplicationStatus() {
  // State variables
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isReapplyDialogOpen, setIsReapplyDialogOpen] = useState(false);

  // Simulated application data (replace with actual data fetching logic)
  useEffect(() => {
    // Simulated data for demonstration
    const simulatedData = [
      { id: 1, status: 'Pending', reason: null },
      { id: 2, status: 'Approved', reason: null },
      { id: 3, status: 'Rejected', reason: 'Incomplete information' },
      // Add more application status data as needed
    ];

    // Set the simulated data to state
    setApplications(simulatedData);
  }, []);

  // Function to handle reapply button click
  const handleReapply = () => {
    // Perform reapply logic here (e.g., navigate to application form page)
    setIsReapplyDialogOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Application Status
      </Typography>
      {applications.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Reason for Rejection</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.id}</TableCell>
                  <TableCell>{application.status}</TableCell>
                  <TableCell>{application.status === 'Rejected' ? application.reason : '-'}</TableCell>
                  <TableCell>
                    {application.status === 'Rejected' && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setSelectedApplication(application);
                          setIsReapplyDialogOpen(true);
                        }}
                      >
                        Reapply
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" align="center">
          No applications found.
        </Typography>
      )}

      {/* Reapply Dialog */}
      <Dialog open={isReapplyDialogOpen} onClose={() => setIsReapplyDialogOpen(false)}>
        <DialogTitle>Reapply Application</DialogTitle>
        <DialogContent>
          {selectedApplication && (
            <Typography>
              Your previous application was rejected due to: <strong>{selectedApplication.reason}</strong>. Would you like to reapply?
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsReapplyDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleReapply}>
            Reapply
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ApplicationStatus;
