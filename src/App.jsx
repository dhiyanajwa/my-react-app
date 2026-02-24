import React from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography } from '@mui/material';

// Import Theme
import theme from './theme';

// Import Data
import { dhiyaData, jasonData } from './data/resumeData';

// Import Components
import ResumeTemplate from './Components/ResumeTemplate';
import Footer from './Components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%', minHeight: '100vh', pt: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="md" sx={{ flexGrow: 1 }}>
          
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" color="primary.main" fontWeight="bold">Internship Applications</Typography>
            <Typography variant="subtitle1" color="text.secondary">UNIMAS Computer Science Students</Typography>
          </Box>

          {/* Render Dhiya's Resume */}
          <ResumeTemplate data={dhiyaData} />

          {/* Render Jason's Resume */}
          <ResumeTemplate data={jasonData} />

        </Container>
        
        {/* Render Footer */}
        <Footer />
        
      </Box>
    </ThemeProvider>
  );
}