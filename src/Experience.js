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
                  <div>
                    <Typography variant="body1">{experience.title}</Typography>
                    <Typography variant="body2">Team: {experience.team}</Typography>
                    <Typography variant="body2">Duration: {experience.duration}</Typography>
                    <Typography variant="body2">Environment: {experience.environment.join(', ')}</Typography>
                    <Typography variant="body2">Brief: {experience.brief}</Typography>
                    <Typography variant="body2">Achievements: {experience.achievements}</Typography>
                    <Typography variant="h6" component="h3">Responsibilities</Typography>
                    <ul>
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
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
