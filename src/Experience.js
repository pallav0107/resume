import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';

function Experience({ experiences }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Experiences</Typography>
        <List>
          {experiences.map((experience, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={experience.company}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {experience.designation}
                    </Typography>
                    {" - " + experience.duration}
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

export default Experience;
