import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const CapabilitiesCard = ({ title, industry, services, flow, description, linkText, cardColor }) => {
  return (
    <Card
      sx={{
        p: 3,
        height: "100%",
        backgroundColor: cardColor || 'grey.500', // Default color if industry is not in the map
        color: 'white',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Industry: {industry}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {description}
      </Typography>
    </Card>
  );
};

export default CapabilitiesCard;
