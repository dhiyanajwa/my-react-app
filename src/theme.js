import { createTheme } from '@mui/material';

// We export a function instead of a constant
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode Colors (Your originals)
          background: { default: '#eef2f6', paper: '#ffffff' },
          primary: { main: '#2c3e50' },
          secondary: { main: '#3498db' },
          text: { primary: '#333333', secondary: '#555555' },
        }
      : {
          // Dark Mode Colors
          background: { default: '#121212', paper: '#1e1e1e' },
          primary: { main: '#415d79' }, // Lighter blue for dark mode visibility
          secondary: { main: '#495c79' },
          text: { primary: '#000000', secondary: '#000000' },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 800, letterSpacing: '0.5px' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});