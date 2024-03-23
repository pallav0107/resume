import React from 'react';
import { Typography, List, ListItem, ListItemText, Card, CardContent } from '@material-ui/core';

function Education({ education }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Education</Typography>
        <List>
          {education.map((edu, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={edu.university}
                secondary={
                  <>
                    <Typography component="span" variant="body1">{edu.degree}</Typography>
                    <br />
                    <Typography component="span" variant="body2">{edu.major}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Education;
