import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SectionHeader from './SectionHeader.jsx';

const Education = ({ educationList }) => (
  <>
    <SectionHeader icon={<SchoolIcon />} title="Education" />
    <Grid container spacing={3}>
      {educationList.map((edu, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card elevation={0} sx={{ height: '100%', backgroundColor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
            <CardContent>
              <Typography variant="h6" color="primary.main" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                {edu.school}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}>
                <EventAvailableIcon sx={{ fontSize: 14 }} />
                <Typography variant="caption" fontWeight="bold">{edu.period}</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 1, minHeight: '40px' }}>
                {edu.program}
              </Typography>
              {edu.highlights && edu.highlights.map((hl, i) => (
                <Chip key={i} label={hl} size="small" variant="outlined" color="primary" sx={{ mt: 1, mr: 0.5, fontWeight: 'bold' }} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

export default Education;
