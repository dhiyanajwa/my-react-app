import React from 'react';
import { Box, Typography, List, ListItem, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SectionHeader from './SectionHeader.jsx';

const Projects = ({ projectsList }) => (
  <>
    <SectionHeader icon={<CodeIcon />} title="Technical Projects" />
    {projectsList.map((project, index) => (
      <Box key={index} sx={{ mb: 4, pl: { xs: 1, md: 2 }, borderLeft: '3px solid', borderColor: 'secondary.light' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', mb: 1 }}>
          <Typography variant="h6" color="primary.main">{project.title}</Typography>
          <Typography variant="subtitle2" color="secondary.main" fontWeight="bold">{project.date}</Typography>
        </Box>
        <List disablePadding sx={{ listStyleType: 'disc', pl: 3, mb: 1.5 }}>
          {project.bullets.map((bullet, i) => (
            <ListItem key={i} sx={{ display: 'list-item', p: 0, py: 0.5 }}>
              <Typography variant="body2" color="text.secondary">{bullet}</Typography>
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.tech.map((tech, i) => (
            <Chip key={i} label={tech} size="small" sx={{ backgroundColor: 'grey.200', fontSize: '0.75rem' }} />
          ))}
        </Box>
      </Box>
    ))}
  </>
);

export default Projects;