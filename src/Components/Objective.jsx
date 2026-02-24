import React from 'react';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SectionHeader from './SectionHeader.jsx';

const Objective = ({ text }) => {
  // Common transition style to match your Header and App components
  const transitionStyle = { transition: 'all 0.3s ease-in-out' };

  return (
    <>
      <SectionHeader 
        icon={<PersonIcon sx={transitionStyle} />} 
        title="Professional Objective" 
        sx={transitionStyle} 
      />
      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'justify', 
          lineHeight: 1.8, 
          color: 'text.secondary',
          ...transitionStyle // Applies transition to text color
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default Objective;