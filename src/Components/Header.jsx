import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = ({ name, title, email, linkedin, phone, location }) => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h4" component="h1" color="primary.main" gutterBottom>
      {name}
    </Typography>
    <Typography variant="h6" color="secondary.main" gutterBottom sx={{ fontWeight: 500 }}>
      {title}
    </Typography>
    
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap', mt: 2 }}>
      {email && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <EmailIcon fontSize="small" color="action" />
          <Link href={`mailto:${email}`} underline="hover" color="text.secondary">{email}</Link>
        </Box>
      )}
      {linkedin && (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <LinkedInIcon fontSize="small" color="action" />
        <Link 
        href={`https://${linkedin}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        underline="hover" 
        color="text.secondary"
        >
        {linkedin}
        </Link>
    </Box>
    )}
    {phone && (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="body2" color="text.secondary">📞</Typography>
        <Link href={`tel:${phone}`} underline="hover" color="text.secondary">
        {phone}
        </Link>
    </Box>
    )}

    {location && (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="body2" color="text.secondary">📍</Typography>
        <Link 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        underline="hover" 
        color="text.secondary"
        >
        {location}
        </Link>
    </Box>
    )}
    </Box>
  </Box>
);

export default Header;