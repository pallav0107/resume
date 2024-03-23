import React from 'react';
import { Typography, List, ListItem, ListItemText, Card, CardContent } from '@material-ui/core';

function CertificationComponent({ certifications }) {
   return (
    <div>
     <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Certifications</Typography>
        <List>
          {certifications.map((certification, index) => (
            <ListItem key={index}>
              <ListItemText primary={certification} />
            </ListItem>
          ))}
        </List>
        </CardContent>
    </Card>
    </div>
  );
}

export default CertificationComponent;
