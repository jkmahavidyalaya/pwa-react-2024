import React from 'react';
import { Typography, Container, Paper, Grid } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '64px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body1" align="justify" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
              sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="justify" paragraph>
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
              nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
              sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit
              quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="justify" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
              sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
