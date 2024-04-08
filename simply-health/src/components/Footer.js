// components/Footer.js

import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ bgcolor: '#572D2E', color: '#AAAAAA', p: 3 ,textAlign: 'center'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ mt: -2 }}>
            <Typography variant="h6" gutterBottom>
              QUICK Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="none">Energy Bill Prediction</Link>
              <Link href="/thermalai" color="inherit" underline="none">AI Thermal Image Analysis</Link>
              <Link href="#" color="inherit" underline="none">DIY Projects</Link>
              <Link href="#" color="inherit" underline="none">Clothing Recommendation</Link>
              <Link href="#" color="inherit" underline="none">Health Consequences</Link>
              <Link href="#" color="inherit" underline="none">Heat Islands</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: -2 }}>
            <Typography variant="h6" gutterBottom>
              Tools
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="none">Energy Bill Prediction</Link>
              <Link href="#" color="inherit" underline="none">AI Heat Leak Detection</Link>
              <Link href="#" color="inherit" underline="none">DIY Weatherproofing Projects</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: -2 }}>
            <Typography variant="h6" gutterBottom>
              Learn
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="none">Clothing Recommendation</Link>
              <Link href="#" color="inherit" underline="none">Health Consequences</Link>
              <Link href="#" color="inherit" underline="none">Heat Islands</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
