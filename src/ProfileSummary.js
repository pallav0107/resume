import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function ProfileSummary({ profile }) {
  const { name, contact, linkedin } = profile;
  
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Profile Summary</Typography>
        <Typography variant="subtitle1">Name: {name}</Typography>
        <Typography variant="subtitle1">Phone: {contact.phone}</Typography>
        <Typography variant="subtitle1">Email: {contact.email}</Typography>
        <Typography variant="subtitle1">LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileSummary;
