import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const whiteLogos = [
  { url: "/logos/python.svg", name: "Python" },
  { url: "/logos/pandas.svg", name: "Pandas" },
  { url: "/logos/numpy.svg", name: "NumPy" },
  { url: "/logos/powerbi.svg", name: "PowerBI" },
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.9,
};
const logoNameStyle = {
  textAlign: "center",
  marginTop: "4px",
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo.url}
              alt={`Missing Logo ${index + 1}`}
              style={logoStyle}
            />
            <Typography variant="body2" style={logoNameStyle}>
              {logo.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
