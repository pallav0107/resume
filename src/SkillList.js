import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

function SkillList({ skills }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Skills</Typography>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{category}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{skillList.join(', ')}</Typography>
              </Grid>
            </Grid>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillList;
