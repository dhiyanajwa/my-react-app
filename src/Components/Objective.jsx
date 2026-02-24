import React from 'react';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SectionHeader from './SectionHeader.jsx';


const Objective = ({ text }) => (
  <>
    <SectionHeader icon={<PersonIcon />} title="Professional Objective" />
    <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8, color: 'text.secondary' }}>
      {text}
    </Typography>
  </>
);

export default Objective;