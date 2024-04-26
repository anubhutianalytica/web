import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  '/logos/python.svg',
  '/logos/pandas.svg',
  '/logos/numpy.svg',
  '/logos/powerbi.svg'
];

const darkLogos = [
  '/logos/python.svg',
  '/logos/pandas.svg',
  '/logos/numpy.svg',
  '/logos/powerbi.svg'
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.9,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4, }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Working with the latest technologies
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Missing Logo ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}