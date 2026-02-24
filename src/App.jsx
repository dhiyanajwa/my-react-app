<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography, IconButton, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun
=======
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography } from '@mui/material';
>>>>>>> a9e44a9e1ad0f77c1f549a776b5fbee3402a19f5

// Import the function from your theme file
import { getDesignTokens } from './theme';

// Import Data
import { dhiyaData, jasonData } from './data/resumeData';

// Import Components
import ResumeTemplate from './Components/ResumeTemplate';
import WelcomePage from './Components/WelcomePage';
import Footer from './Components/Footer';

export default function App() {
<<<<<<< HEAD
  // 1. Manage mode state
  const [mode, setMode] = useState('light');

  // 2. Create the theme object based on state
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
=======
  // State to track which page we are on ('home', 'dhiya', or 'jason')
  const [currentView, setCurrentView] = useState('home');

  // Function to decide what to show on the screen
  const renderView = () => {
    switch(currentView) {
      case 'dhiya':
        return <ResumeTemplate data={dhiyaData} onBack={() => setCurrentView('home')} />;
      case 'jason':
        return <ResumeTemplate data={jasonData} onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        // Pass the setCurrentView function to the WelcomePage so it can change the page!
        return <WelcomePage onSelect={setCurrentView} />;
    }
>>>>>>> a9e44a9e1ad0f77c1f549a776b5fbee3402a19f5
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
          
<<<<<<< HEAD
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
=======
          {/* Renders the correct view based on the state */}
          {renderView()}
>>>>>>> a9e44a9e1ad0f77c1f549a776b5fbee3402a19f5

        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}