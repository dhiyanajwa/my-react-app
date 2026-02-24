import React from 'react';
import { Paper, Divider, Box, Typography } from '@mui/material';
import Header from './Header';
import Objective from './Objective';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const ResumeTemplate = ({ data }) => {
  return (
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
  );
};

export default ResumeTemplate;