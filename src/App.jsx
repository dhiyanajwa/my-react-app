import React from 'react';
import { 
  Grid, Typography, Box, Divider, Link, List, ListItem, 
  Container, Card, CardContent, CssBaseline, Chip, Paper, ThemeProvider, createTheme 
} from '@mui/material';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import PartnerResume from './PartnerResume/AppJax';

// Create a custom theme for a professional, cohesive look
const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8', // Light gray background outside the resume
    },
    primary: {
      main: '#2c3e50', // Professional dark blue/slate
    },
    secondary: {
      main: '#3498db', // Accent blue
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 800, letterSpacing: '0.5px' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const SectionHeader = ({ icon, title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4 }}>
    <Box sx={{ 
      backgroundColor: 'primary.main', 
      color: 'white', 
      borderRadius: '50%', 
      p: 1, 
      display: 'flex', 
      mr: 2 
    }}>
      {icon}
    </Box>
    <Typography variant="h5" component="h2" color="primary.main">
      {title}
    </Typography>
    <Divider sx={{ flexGrow: 1, ml: 2, borderColor: 'primary.light', opacity: 0.3 }} />
  </Box>
);

function App() {
  const technicalSkills = ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'C++', 'C#', 'XAMPP', 'Flutter', 'PHP', 'SQL', 'Figma', 'Kotlin', 'C'];
  const softSkills = ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability', 'Working Under Pressure', 'Willingness to Learn', 'Reliability'];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%', minHeight: '100vh', py: { xs: 2, md: 5 } }}>
        <Container maxWidth="md">
          {/* Main Paper acts as the "Page" */}
          <Paper elevation={4} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2, backgroundColor: '#ffffff' }}>
            
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" component="h1" color="primary.main" gutterBottom>
                DHIYA NAJWA ATMA BINTI DRAHMAN
              </Typography>
              <Typography variant="h6" color="secondary.main" gutterBottom sx={{ fontWeight: 500 }}>
                Aspiring Software Intern
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <EmailIcon fontSize="small" color="action" />
                  <Link href="mailto:dhiyanajwaatma1227@gmail.com" underline="hover" color="text.secondary">
                    dhiyanajwaatma1227@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LinkedInIcon fontSize="small" color="action" />
                  <Link href="https://www.linkedin.com/in/dhiyanajwaatma" target="_blank" underline="hover" color="text.secondary">
                    linkedin.com/in/dhiyanajwaatma
                  </Link>
                </Box>
              </Box>
            </Box>

            {/* Objective Section */}
            <SectionHeader icon={<PersonIcon />} title="Professional Objective" />
            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8, color: 'text.secondary' }}>
              Reliable and adaptable Computer Science (Multimedia Computing) student seeking skills in programming, 
              troubleshooting, and system management. Proficient in English with strong communication skills, able to 
              work under pressure, manage multiple tasks efficiently, and committed to continuous learning in the technology field.
            </Typography>

            {/* Education Section */}
            <SectionHeader icon={<SchoolIcon />} title="Education" />
            <Grid container spacing={3}>
              {/* UNIMAS */}
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', backgroundColor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary.main" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                      University of Malaysia Sarawak
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}>
                      <EventAvailableIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" fontWeight="bold">2023 - Present</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Degree in Computer Science (Multimedia Computing) <br/><em>with Hons.</em>
                    </Typography>
                    <Chip label="Current CGPA: 3.40" size="small" color="secondary" sx={{ mt: 1, mb: 1, fontWeight: 'bold' }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      Dean's List: 24/25-2 & 25/26-1
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* SMK Bandar */}
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', backgroundColor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary.main" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                      SMK Bandar
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}>
                      <EventAvailableIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" fontWeight="bold">2021 - 2023</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Sijil Tinggi Pengajian Malaysia (STPM)
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      MUET Band 4.0
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      Pengajian Am, Chemistry, Biology, Maths T
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* SMK Kemena */}
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', backgroundColor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary.main" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                      SMK Kemena
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}>
                      <EventAvailableIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" fontWeight="bold">2016 - 2021</Typography>
                    </Box>
                    <Chip label="Achieved 4A" size="small" color="success" variant="outlined" sx={{ mt: 1, fontWeight: 'bold' }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Projects Section */}
            <SectionHeader icon={<CodeIcon />} title="Technical Projects" />
            
            {[
              {
                title: "Hang Lucky - Top Down Pixel 2D",
                date: "Oct 2025 - Jan 2026",
                bullets: [
                  "Produced game storyline inspired by historical events and figures during British invasion in 16th century",
                  "Designed game layout by using tilemaps and finished it 1 week earlier",
                  "Created game characters following old folk lore of Malays in 16th century"
                ],
                tech: ["Game Design", "Tilemaps", "2D Pixel Art"]
              },
              {
                title: "TheMinums - Dynamic WebApp for E-Commerce",
                date: "Nov 2025 - Jan 2026",
                bullets: [
                  "Developed and designed a website for The Minum's, cafe based in UNIMAS",
                  "Integrated with Firebase Console as database for admin side",
                  "Developed dummy payment process to improve user experience"
                ],
                tech: ["Web Development", "Firebase", "Database Management"]
              },
              {
                title: "UniVent - Campus Event Management App",
                date: "Dec 2025",
                bullets: [
                  "Developed mobile application using Android Studio",
                  "Integrated with Firebase Console for authentication, database, and notifications",
                  "Applied CRUD (create, read, update, delete) for events restricted to admin access"
                ],
                tech: ["Android Studio", "Firebase", "CRUD"]
              },
              {
                title: "ZoomRentals — Rental Management Web App",
                date: "Jun 2025",
                bullets: [
                  "Developed a local-host rental system focused on smooth data input, page navigation, and backend integration"
                ],
                tech: ["PHP", "SQL", "HTML"]
              }
            ].map((project, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', mb: 1 }}>
                  <Typography variant="h6" component="h3" color="primary.main">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="secondary.main" fontWeight="bold">
                    {project.date}
                  </Typography>
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

            {/* Skills Section */}
            <SectionHeader icon={<BuildIcon />} title="Skills" />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary.main" fontWeight="bold" gutterBottom>
                  Technical Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {technicalSkills.map((skill, index) => (
                    <Chip key={index} label={skill} variant="outlined" color="primary" />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary.main" fontWeight="bold" gutterBottom>
                  Soft Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {softSkills.map((skill, index) => (
                    <Chip key={index} label={skill} sx={{ backgroundColor: 'secondary.light', color: 'secondary.contrastText' }} />
                  ))}
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* References */}
            <Box sx={{ textAlign: 'center', pb: 2 }}>
              <Typography variant="body2" color="text.secondary" fontStyle="italic">
                References are available upon request.
              </Typography>
            </Box>

            {/* ============================================== */}
            {/* ADD THIS SECTION HERE TO SHOW PARTNER'S RESUME */}
            {/* ============================================== */}
            
            <Divider sx={{ my: 8, borderBottomWidth: 5, borderColor: 'primary.main' }} />
            
            <Box sx={{ textAlign: 'center', mb: 4 }}>
               <Typography variant="h3" color="primary.main">PARTNER RESUME</Typography>
            </Box>

            {/* This is the line that actually makes it appear! */}
            <PartnerResume />  

            {/* ============================================== */}

          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;