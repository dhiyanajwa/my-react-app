import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography } from '@mui/material';

// Import Theme
import theme from './theme';

// Import Data
import { dhiyaData, jasonData } from './data/resumeData';

// Import Components
import ResumeTemplate from './Components/ResumeTemplate';
import WelcomePage from './Components/WelcomePage';
import Footer from './Components/Footer';
import AiChatbot from './Components/AiChatbot';

export default function App() {
  // State to track which page we are on ('home', 'dhiya', or 'jason')
  const [currentView, setCurrentView] = useState('home');

  // Function to decide what to show on the screen
  const renderView = () => {
    switch (currentView) {
      case 'dhiya':
        return <ResumeTemplate data={dhiyaData} onBack={() => setCurrentView('home')} />;
      case 'jason':
        return <ResumeTemplate data={jasonData} onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        // Pass the setCurrentView function to the WelcomePage so it can change the page!
        return <WelcomePage onSelect={setCurrentView} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%', minHeight: '100vh', pt: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="md" sx={{ flexGrow: 1 }}>

          {/* Renders the correct view based on the state */}
          {renderView()}

        </Container>

        {/* Render Footer */}
        <Footer />

      </Box>

      {/* AI Chatbot — floating on all pages */}
      <AiChatbot currentView={currentView} />
    </ThemeProvider>
  );
}