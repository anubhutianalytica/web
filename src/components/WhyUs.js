import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

const tiers = [
  {
    title: "Unique Consulting Report",
    description:
      "Our highly experienced analytics team provides in-depth data analysis and actionable insights tailored to your business needs. These reports provide a deep dive into your data, offering valuable strategies for growth and optimization.",
    image: "/background/report.jpg",
  },
  {
    title: "Dashboard Dynamics",
    description:
      "Stay on top of your analytics metrics with our dynamic real-time dashboards. Track key performance indicators and make informed decisions instantly, ensuring you always have a pulse on your business's performance.",
    image: "/background/car_dashboard.jpg",
  },
  {
    title: "Full Customization",
    description:
      "We understand that every business is unique. That's why we offer fully customizable solutions to meet your specific requirements. With our commitment to fast turnaround times, you'll receive timely insights and strategies to drive your business forward.",
    image: "/background/work.jpg",
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
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Why Us?
        </Typography>
        {tiers.map((tier, index) => (
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "grey.900",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${tier.image})`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(7, 47, 99,.6)",
              }}
            />
            <Grid container>
              <Grid item md={5}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h2"
                    color="grey.50"
                    gutterBottom
                  >
                    {tier.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {tier.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </Box>
  );
}
