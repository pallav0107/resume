import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function CertificationAndEducation({ certifications, education }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Certifications and Education</Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Certification</TableCell>
                <TableCell>University</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>Major</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certifications.map((certification, index) => (
                <TableRow key={index}>
                  <TableCell>{certification}</TableCell>
                  {/* Render education details for each certification */}
                  <TableCell>{education[index]?.university}</TableCell>
                  <TableCell>{education[index]?.degree}</TableCell>
                  <TableCell>{education[index]?.major}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default CertificationAndEducation;
