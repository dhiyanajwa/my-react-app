import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography, IconButton, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun

// Import the function from your theme file
import { getDesignTokens } from './theme';

// Import Data
import { dhiyaData, jasonData } from './data/resumeData';

// Import Components
import ResumeTemplate from './Components/ResumeTemplate';
import Footer from './Components/Footer';

export default function App() {
  // 1. Manage mode state
  const [mode, setMode] = useState('light');

  // 2. Create the theme object based on state
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* 3. The Toggle Button */}
      <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 1100 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Box sx={{ 
        width: '100%', 
        minHeight: '100vh', 
        bgcolor: 'background.default', // Uses color from theme.js
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', // Horizontal Centering Fix
        transition: '0.3s' 
      }}>
        <Container maxWidth="md" sx={{ flexGrow: 1, py: { xs: 2, md: 5 } }}>
          
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" color="primary.main" fontWeight="bold">
              Internship Applications
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              UNIMAS Computer Science Students
            </Typography>
          </Box>

          {/* Wrapper Boxes for centering and spacing */}
          <Box sx={{ mb: 8, width: '100%' }}>
            <ResumeTemplate data={dhiyaData} />
          </Box>

          <Box sx={{ mb: 8, width: '100%' }}>
            <ResumeTemplate data={jasonData} />
          </Box>

        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}