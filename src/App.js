import React from 'react';
import { Container, Paper } from '@material-ui/core';
import ProfileSummary from './ProfileSummary';
import SkillList from './SkillList';
import CertificationComponent from './CertificationComponent';
import EducationComponent from './EducationComponent';
import Experience from './Experience';
import data from './data.json'; // Importing JSON data

function App() {
  const { profile, certifications, education, experiences, skills } = data;
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', overflowY: 'auto', maxHeight: '80vh' }}>
        <ProfileSummary  profile={profile}/>
        <SkillList skills={skills} /> 
        <CertificationComponent certifications={certifications} />
        <EducationComponent education={education}  />
        <Experience experiences={experiences} />
    
      </Paper>
    </Container>
  );
}

export default App;