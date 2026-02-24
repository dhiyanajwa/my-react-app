import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

<<<<<<< HEAD
const Header = ({ name, title, email, linkedin, phone, location }) => {
  // Common transition style
  const transitionStyle = { transition: 'all 0.3s ease-in-out' };

  return (
    <Box sx={{ textAlign: 'center', mb: 4, ...transitionStyle }}>
      <Typography variant="h4" component="h1" color="primary.main" gutterBottom sx={transitionStyle}>
        {name}
      </Typography>
      <Typography variant="h6" color="secondary.main" gutterBottom sx={{ fontWeight: 500, ...transitionStyle }}>
        {title}
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap', mt: 2 }}>
        {email && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon fontSize="small" color="action" sx={transitionStyle} />
            <Link href={`mailto:${email}`} underline="hover" color="text.primary" sx={transitionStyle}>
              {email}
            </Link>
          </Box>
        )}
        {linkedin && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LinkedInIcon fontSize="small" color="action" sx={transitionStyle} />
            <Typography variant="body2" color="text.primary" sx={transitionStyle}>
              {linkedin}
            </Typography>
          </Box>
        )}
        {/* Added transition to phone and location text as well */}
        {phone && (
          <Typography variant="body2" color="text.secondary" sx={transitionStyle}>
            📞 {phone}
          </Typography>
        )}
        {location && (
          <Typography variant="body2" color="text.secondary" sx={transitionStyle}>
            📍 {location}
          </Typography>
        )}
      </Box>
=======
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
>>>>>>> a9e44a9e1ad0f77c1f549a776b5fbee3402a19f5
    </Box>
  );
};

export default Header;