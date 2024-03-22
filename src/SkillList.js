import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function SkillList({ skills }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Skills</Typography>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <Typography variant="subtitle1">{category}</Typography>
            <Typography variant="body1">
              {skillList.join(', ')}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillList;
