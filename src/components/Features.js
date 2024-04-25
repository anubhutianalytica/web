import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Performance Evaluation",
    description:
      "Our clients gain insights into their operations, allowing them to streamline processes, reduce costs, and ultimately increase profitability. They can identify areas of improvement, optimize resource allocation, and make informed decisions based on data.",
    imageLight: 'url("/images/consulting.jpg")',
    imageDark: 'url("/images/consulting.jpg")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Forecasting",
    description:
      "Our clients can anticipate market trends and demand fluctuations, enabling them to plan inventory, production, and marketing strategies more effectively. This helps our clients stay ahead of the curve, minimize risks, and capitalize on opportunities, ultimately improving their bottom line.",
    imageLight: 'url("/images/dashboard.png")',
    imageDark: 'url("/images/dashboard.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Marketing Analytics",
    description:
      "By understanding customer behavior and preferences, our clients can tailor their marketing efforts to target the right audience with the right message at the right time. This leads to higher conversion rates, increased customer engagement, and improved return on marketing investment.",
    imageLight: 'url("/images/customization.png")',
    imageDark: 'url("/images/customization.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Customer Segmentation",
    description:
      "Our clients can identify their most valuable customer segments and tailor their products, services, and marketing strategies to meet their specific needs. This enhances customer satisfaction, loyalty, and retention, leading to long-term profitability and sustainable growth.",
    imageLight: 'url("/images/segmentation.png")',
    imageDark: 'url("/images/segmentation.png")',
  }
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 2 },
        color: "white",
      }}
    >
      <Container sx={{ py: { xs: 8, sm: 16 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography component="h2" variant="h4" color="text.primary">
                Our Capabilities
              </Typography>
              {/* <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                We help our clients drive business success through comprehensive
                business intelligence services, encompassing performance
                evaluation, forecasting, customer segmentation and marketing
                analytics. Our capabilities provide businesses with the tools
                and insights they need to optimize their operations, improve
                decision-making, and drive sustainable profitability in an
                increasingly competitive business environment.
              </Typography> */}
            </div>
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
                  backgroundImage: (theme) =>
                    theme.palette.mode === "light"
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
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
                <Link
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                >
                  <span>Learn more</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
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
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "grey.200";
                      }
                      return selectedItemIndex === index
                        ? "primary.dark"
                        : "grey.800";
                    },
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
                        color: (theme) => {
                          if (theme.palette.mode === "light") {
                            return selectedItemIndex === index
                              ? "primary.main"
                              : "grey.300";
                          }
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.700";
                        },
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
                      <Link
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          "& > svg": { transition: "0.2s" },
                          "&:hover > svg": { transform: "translateX(2px)" },
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <span>Learn more</span>
                        <ChevronRightRoundedIcon
                          fontSize="small"
                          sx={{ mt: "1px", ml: "2px" }}
                        />
                      </Link>
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
                  backgroundImage: (theme) =>
                    theme.palette.mode === "light"
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
