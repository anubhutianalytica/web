import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const whiteLogos = [
  { url: "/logos/python.svg", name: "Python" },
  { url: "/logos/pandas.svg", name: "Pandas" },
  { url: "/logos/numpy.svg", name: "NumPy" },
  { url: "/logos/powerbi.svg", name: "PowerBI" },
  { url: "/logos/alteryx.svg", name: "Alteryx" },
  { url: "/logos/excel.svg", name: "Excel" },
  { url: "/logos/mssql.svg", name: "SQL" },
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
  const logos = whiteLogos;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="logoCollection" sx={{ py: 4, overflowX: "auto" }}>
      <Grid
        container
        justifyContent={isMobile ? "flex-start" : "center"}
        wrap="nowrap"
        sx={{ mt: 0.5, opacity: 0.6 }}
      >
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
