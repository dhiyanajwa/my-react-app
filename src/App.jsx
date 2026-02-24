import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, IconButton, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Import your getDesignTokens function from theme.js
import { getDesignTokens } from './theme'; 
import { dhiyaData, jasonData } from './data/resumeData';

import ResumeTemplate from './Components/ResumeTemplate';
import WelcomePage from './Components/WelcomePage';
import Footer from './Components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [mode, setMode] = useState('light'); // Added Theme State

  // Create dynamic theme
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const renderView = () => {
    switch(currentView) {
      case 'dhiya':
        return <ResumeTemplate data={dhiyaData} onBack={() => setCurrentView('home')} />;
      case 'jason':
        return <ResumeTemplate data={jasonData} onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <WelcomePage onSelect={setCurrentView} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Fixed Toggle Button */}
      <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 1100 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Box sx={{ 
        width: '100%', 
        minHeight: '100vh', 
        bgcolor: 'background.default', // Now works with state!
        display: 'flex', 
        flexDirection: 'column',
        transition: '0.3s' 
      }}>
        <Container maxWidth="md" sx={{ flexGrow: 1, py: { xs: 2, md: 5 } }}>
          {renderView()}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}