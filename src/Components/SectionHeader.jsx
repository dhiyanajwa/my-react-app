import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const SectionHeader = ({ icon, title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4 }}>
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', borderRadius: '50%', p: 1, display: 'flex', mr: 2 }}>
      {icon}
    </Box>
    <Typography variant="h5" component="h2" color="primary.main">{title}</Typography>
    <Divider sx={{ flexGrow: 1, ml: 2, borderColor: 'primary.light', opacity: 0.3 }} />
  </Box>
);

export default SectionHeader;