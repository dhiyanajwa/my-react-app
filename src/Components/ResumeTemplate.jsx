import React from 'react';
import { Paper, Divider, Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from './Header';
import Objective from './Objective';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const ResumeTemplate = ({ data, onBack }) => {
  return (
    <Box>
      {onBack && (
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={onBack} 
          sx={{ mb: 3, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          Back to Home
        </Button>
      )}
      <Paper elevation={4} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2, backgroundColor: '#ffffff', mb: 6 }}>
        
        <Header {...data} />

        {data.objective && <Objective text={data.objective} />}
        {data.education && <Education educationList={data.education} />}
        {data.projects && <Projects projectsList={data.projects} />}
        {data.skills && <Skills skillsData={data.skills} />}

        <Divider sx={{ my: 4 }} />
        <Box sx={{ textAlign: 'center', pb: 2 }}>
          <Typography variant="body2" color="text.secondary" fontStyle="italic">
            References are available upon request.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResumeTemplate;