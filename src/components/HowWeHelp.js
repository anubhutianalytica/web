import CardMembershipIcon from "@mui/icons-material/CardMembership";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsightsIcon from "@mui/icons-material/Insights";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/App.css";

const items = [
  {
    icon: <SavingsIcon fontSize="large" />,
    title: "Cost Reduction",
    description:
      "An average cost reduction of 10% can be achieved through the use of data analytics and consulting",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Risk Mitigation",
    description:
      "Data driven dashboards, inventory management, KPIs tracking can improve decision making by ~50%",
  },
  {
    icon: <InsightsIcon fontSize="large" />,
    title: "Strategic Decisions",
    description:
      "Forecasting, market sizing can help estimate future demand and make better strategies to improve bottomline and stay competitive",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: "Marketing Optimization",
    description:
      "Knowing promotion effectiveness can reduce more than 10% marketing costs and improve ROIs",
  },
  {
    icon: <QueryStatsRoundedIcon fontSize="large" />,
    title: "Revenue Growth",
    description:
      "Sales Analytics coupled with statistical modeling can help identify areas of growth and profitability",
  },
  {
    icon: <CardMembershipIcon fontSize="large" />,
    title: " Customer Retention",
    description:
      "Knowing your best, potential and at risk customers can improve customer retention & satisfaction",
  },
];

export default function HowWeHelp() {
  return (
    <Box
      id="howWeHelp"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
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
          <Typography
            className="how-we-help-main-title"
            component="h2"
            variant="h4"
          >
            How do we create value for your business?
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Our vision is to empower small and medium businesses with analytics
            and consulting
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Stack direction="row" color="inherit" spacing={1} useFlexGap>
                  <Box sx={{ opacity: "100%" }}>{item.icon}</Box>
                  <Typography
                    className="how-we-help-item-title"
                    fontWeight="medium"
                    variant="h5"
                    gutterBottom
                    sx={{
                      width: "100%",
                      alignContent: "center",
                      pt: "8px",
                      pl: "15px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ color: "grey.400" }}>
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
