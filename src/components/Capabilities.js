import InsightsIcon from "@mui/icons-material/Insights";
import StoreIcon from "@mui/icons-material/Store";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

const items = [
  {
    icon: <InsightsIcon fontSize="large" />,
    title: "Performance Consulting",
    description:
      "We help you identify and select key metrics across areas such as revenue, customer interactions, operations, and employee performance, and then use analytics tools to build customized business dashboards to track and assess these metrics, providing actionable insights to drive growth and address performance gaps",
    imageLight: 'url("/images/PerformanceConsulting.png")',
  },
  {
    icon: <VisibilityIcon fontSize="large" />,
    title: "Strategy Consulting",
    description:
      "Our services include market sizing to identify growth opportunities, forecasting to predict future trends, and benchmarking to measure performance against industry standards. We develop tailored strategic roadmaps and actionable plans, enabling you to drive growth and navigate challenges effectively",
    imageLight: 'url("/images/StrategyConsulting.png")',
  },
  {
    icon: <StoreIcon fontSize="large" />,
    title: "Marketing Consulting",
    description:
      "We assist in optimizing your marketing efforts through detailed customer segmentation, media mix modeling, and campaign effectiveness analysis. Our services include developing targeted marketing strategies, evaluating the impact of your campaigns, and leveraging analytics to enhance media investments, drive growth, and improve ROI",
    imageLight: 'url("/images/MarketingConsulting.png")',
  },
  {
    icon: <ViewQuiltRoundedIcon fontSize="large" />,
    title: "Analytics Consulting",
    description:
      "Analytics consulting empowers organizations to harness analytics and AI effectively, making them self-sufficient. We build software applications, technical dashboards, and automate machine learning pipelines, while also developing the necessary infrastructure to support these solutions",
    imageLight: 'url("/images/AnalyticsConsulting.png")',
  },
];

export default function Capabilities() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      id="capabilities"
      sx={{
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 2 },
        color: "white",
      }}
    >
       <Container
        className="container"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 6 },
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
          Our Capabilities
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
              
            <Grid
              container
              item
              gap={1}
              sx={{ display: { xs: "auto", sm: "none" }, pb: { xs: 2, sm: 2 } }}
            >
              {items.map(({ title }, index) => (
                <Chip
                  key={index}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "";
                      }
                      return selectedItemIndex === index ? "primary.light" : "";
                    },
                    background: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index ? "none" : "";
                      }
                      return selectedItemIndex === index ? "none" : "";
                    },
                    backgroundColor:
                      selectedItemIndex === index ? "primary.main" : "",
                    "& .MuiChip-label": {
                      color: selectedItemIndex === index ? "#fff" : "",
                    },
                  }}
                />
              ))}
            </Grid>
            <Box
              component={Card}
              variant="outlined"
              sx={{
                display: { xs: "auto", sm: "none" },
                mt: 4,
              }}
            >
              <Box
                sx={{
                  backgroundImage: items[selectedItemIndex].imageLight,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  minHeight: 280,
                }}
              />
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  {selectedFeature.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  {selectedFeature.description}
                </Typography>
              </Box>
            </Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: "fit-content",
                    width: "100%",
                    background: "none",
                    backgroundColor:
                      selectedItemIndex === index
                        ? "action.selected"
                        : undefined,
                    borderColor:
                      selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "left",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { md: "center" },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        color:
                          selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300",
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ textTransform: "none" }}>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ my: 0.5 }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "none", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  m: "auto",
                  width: 4200,
                  height: 500,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: items[selectedItemIndex].imageLight,
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
