import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const WelcomePage = ({ onSelect }) => (
  <Box sx={{ minHeight: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Typography variant="h3" color="primary.main" fontWeight="bold" gutterBottom>
      Internship Applications
    </Typography>
    <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 400 }}>
      UNIMAS Computer Science Students
    </Typography>

    <Grid container spacing={4} justifyContent="center" maxWidth="md">
      {/* Dhiya's Card */}
      <Grid item xs={12} sm={6} md={5}>
        <Card elevation={4} sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 8 } }}>
          <CardActionArea onClick={() => onSelect('dhiya')} sx={{ p: 5 }}>
            <PersonIcon sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h5" color="primary.main" fontWeight="bold" gutterBottom>Dhiya Najwa</Typography>
            <Typography variant="body1" color="text.secondary">Software Engineering</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 3, borderRadius: 5 }}>View Resume</Button>
          </CardActionArea>
        </Card>
      </Grid>

      {/* Jason's Card */}
      <Grid item xs={12} sm={6} md={5}>
        <Card elevation={4} sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 8 } }}>
          <CardActionArea onClick={() => onSelect('jason')} sx={{ p: 5 }}>
            <PersonIcon sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h5" color="primary.main" fontWeight="bold" gutterBottom>Jason Ong</Typography>
            <Typography variant="body1" color="text.secondary">Computer Science</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 3, borderRadius: 5 }}>View Resume</Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default WelcomePage;