import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsightsIcon from '@mui/icons-material/Insights';
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
const items = [
  {
    icon: <SavingsIcon fontSize="large"/>,
    title: "Cost Reduction",
    description:
      "Through performance evaluation and optimization, we help clients reduce unnecessary expenses and improve cost-effectiveness.",
  },
  {
    icon: <SecurityIcon fontSize="large"/>,
    title: "Risk Mitigation",
    description:
      "By forecasting market trends and identifying potential risks, we assist clients in implementing strategies to mitigate risks.",
  },
  {
    icon: <InsightsIcon fontSize="large"/>,
    title: "Strategic Decisions",
    description:
      "Our analysis services provide clients with data-driven insights that enables them to  capitalize on opportunities for growth.",
  },
  {
    icon: <EmojiEventsIcon fontSize="large"/>,
    title: "Market Competitiveness",
    description:
      "We help clients stay ahead of the competition by understanding customer preferences, tailoring offerings, and enhancing customer loyalty.",
  },
  {
    icon: <QueryStatsRoundedIcon fontSize="large"/>,
    title: "Revenue Growth",
    description:
      "Through data analysis, we drive revenue growth and improve overall profitability for our clients.",
  },
  {
    icon: <CardMembershipIcon fontSize="large"/>,
    title: " Customer Retention",
    description:
      "Through deep analysis of customer behavior and preferences, we help clients meet the specific needs of their customer segments ",
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
          <Typography component="h2" variant="h4">
            How do we help you?
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why we stand out: adaptability, durability, and innovation.
            Enjoy reliable customer support and precision in every detail.
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
                    fontWeight="medium"
                    variant="h5"
                    gutterBottom
                    sx={{
                      width: "100%",
                      alignContent: "center",
                      pt: "8px",
                      pl: "15px"
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
