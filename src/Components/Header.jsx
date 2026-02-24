import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    </Box>
  );
};

export default Header;