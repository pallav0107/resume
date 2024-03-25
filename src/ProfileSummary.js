import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function ProfileSummary({ profile }) {
  const { name, contact, linkedin, github, photoUrl } = profile;
  
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1' }}>
        {photoUrl && 
         <Typography variant="subtitle1"> <img 
         src={photoUrl} 
         alt="Profile" 
         style={{ 
           width: '100px', 
           height: '100px', 
           borderRadius: '50%',
          
         }} 
       /></Typography>
         }
          <Typography variant="h5" component="h2">Profile Summary</Typography>
          <Typography variant="subtitle1">Name: {name}</Typography>
          <Typography variant="subtitle1">Phone: {contact.phone}</Typography>
          <Typography variant="subtitle1">Email: {contact.email}</Typography>
          <Typography variant="subtitle1">LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></Typography>
          <Typography variant="subtitle1">Github: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></Typography>
        </div>
   
      </CardContent>
    </Card>
  );
}

export default ProfileSummary;
