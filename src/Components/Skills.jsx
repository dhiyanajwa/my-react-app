import React from 'react';
import { Grid, Typography, Box, Chip } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import LanguageIcon from '@mui/icons-material/Language';
import SectionHeader from './SectionHeader.jsx';

const Skills = ({ skillsData }) => (
  <>
    <SectionHeader icon={<BuildIcon />} title="Skills & Languages" />
    <Grid container spacing={4}>
      {skillsData.technical && (
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary.main" fontWeight="bold" gutterBottom>Technical Skills</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skillsData.technical.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" color="primary" />
            ))}
          </Box>
        </Grid>
      )}

      {skillsData.soft && (
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary.main" fontWeight="bold" gutterBottom>Soft Skills</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skillsData.soft.map((skill, index) => (
              <Chip key={index} label={skill} sx={{ backgroundColor: 'secondary.light', color: 'secondary.contrastText' }} />
            ))}
          </Box>
        </Grid>
      )}

      {skillsData.languages && (
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary.main" fontWeight="bold" gutterBottom>Languages Spoken</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skillsData.languages.map((lang, index) => (
              <Chip key={index} icon={<LanguageIcon />} label={lang} color="secondary" variant="outlined" />
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  </>
);

export default Skills;