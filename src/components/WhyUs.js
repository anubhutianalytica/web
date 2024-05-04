import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const logoStyle = {
  width: "100%",
  height: "450px",
  pt: "15px"
};
const tiers = [
  {
    title: "Insight Essentials",
    description: [
      "Performace evaluation",
      "Forecasting",
      "Customer Segmentation",
      "Marketing Analytics",
      "Detailed Consulting Reports",
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined",
  },
  {
    title: "Dashboard Dynamics",
    description: [
      "Real-time Dashboarding",
      "Performace evaluation",
      "Forecasting",
      "Customer Segmentation",
      "Marketing Analytics",
      "Detailed Consulting Reports",
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined",
  },
  {
    title: "Growth Accelerator",
    description: [
      "Quarterly Business Analysis Cycles",
      "Real-time Dashboarding",
      "Performace evaluation",
      "Forecasting",
      "Customer Segmentation",
      "Marketing Analytics",
      "Detailed Consulting Reports",
    ],
    buttonText: "Contact Us",
    buttonVariant: "contained",
  },
];

export default function WhyUs() {
  return (
    <Box
      id="whyUs"
      sx={{
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 2 },
        color: "white",
      }}
    >
      <Container
        className="container"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          className="grid-parent"
        >
          {tiers.map((tier) => (
            <Grid
              className="grid-child"
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Growth Accelerator" ? 12 : 6}
              md={4}
            >
              <Card
              className="card"
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 40,
                  border: "4px solid",
                  borderColor: "primary.main",
                  background: "linear-gradient(#033363, #021F3B)",
                }}
              >
                <CardContent>
                  <Box
                  className="content-box"
                    sx={{
                      // backgroundImage: "url(/images/whyus-report.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "grey.100",
                      pb: "1000"
                    }}
                  >
                    <Box>
                <img
                  src="/images/whyus-report.jpg"
                  style={logoStyle}
                  alt="Logo of Anubhuti Analytics"
                />
              </Box>
                  </Box>
                  
                 
                </CardContent>
               
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
