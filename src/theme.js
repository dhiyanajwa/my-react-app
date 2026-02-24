import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: { default: '#db67bc' },
    primary: { main: '#2c3e50' },
    secondary: { main: '#3498db' },
    text: { primary: '#333333', secondary: '#555555' }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 800, letterSpacing: '0.5px' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

export default theme;