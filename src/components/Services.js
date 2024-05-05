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

const services = [
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
    buttonVariant: "contained",
  },
  {
    title: "Growth Accelerator",
    subheader: "Enterprise",
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
    buttonVariant: "contained",
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 2 },
        color: "white",
      }}
    >
      <Container
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
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            Services We Offer
          </Typography>
          <Typography variant="body1" color="text.secondary">
            These distinct services are tailored to accommodate varying client
            needs and financial considerations, offering increasing levels of
            analysis and insights to support their business objectives.
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {services.map((service) => (
            <Grid
              item
              key={service.title}
              xs={12}
              sm={service.title === "Growth Accelerator" ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  border:
                  service.title === "Growth Accelerator"
                      ? "2px solid"
                      : "1px solid",
                  borderColor:
                  service.title === "Growth Accelerator"
                      ? "primary.main"
                      : "secondary.main",
                  background:
                  service.title === "Growth Accelerator"
                      ? "linear-gradient(#033363, #021F3B)"
                      : "linear-gradient(rgba(3, 51, 99, 0.9), rgba(2, 31, 59, 0.5))",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color:
                      service.title === "Growth Accelerator"
                          ? "grey.100"
                          : "grey.200",
                    }}
                  >
                    <Typography component="h3" variant="h3">
                      {service.title}
                    </Typography>
                    {service.title === "Growth Accelerator" && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={service.subheader}
                        size="small"
                        sx={{
                          background: "",
                          backgroundColor: "primary.contrastText",
                          "& .MuiChip-label": {
                            color: "primary.dark",
                          },
                          "& .MuiChip-icon": {
                            color: "primary.dark",
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      opacity: 0.2,
                      borderColor:
                      service.title === "Growth Accelerator"
                          ? "grey.500"
                          : "grey.300",
                    }}
                  />
                  {service.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color:
                          service.title === "Growth Accelerator"
                              ? "primary.light"
                              : "primary.main",
                        }}
                      />
                      <Typography
                        component="text"
                        variant="subtitle2"
                        sx={{
                          color:
                          service.title === "Growth Accelerator"
                              ? "grey.200"
                              : "grey.50",
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={service.buttonVariant}
                    component="a"
                    href="mailto:contact@anubhutianalytics.com"
                    target="_blank"
                  >
                    {service.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
