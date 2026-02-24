import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ textAlign: 'center', py: 4, mt: 'auto' }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Dhiya Najwa Atma & Jason Ong Lee Chang. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
