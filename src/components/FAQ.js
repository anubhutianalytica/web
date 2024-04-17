import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Frequently asked questions
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle2">
                What do I get with Performance Evaluation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our clients gain insights into their operations, allowing them
                to streamline processes, reduce costs, and ultimately increase
                profitability. They can identify areas of improvement, optimize
                resource allocation, and make informed decisions based on data.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle2">
                What do you mean by Forecasting?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our clients can anticipate market trends and demand
                fluctuations, enabling them to plan inventory, production, and
                marketing strategies more effectively. This helps our clients
                stay ahead of the curve, minimize risks, and capitalize on
                opportunities, ultimately improving their bottom line.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle2">
                How do you do your Market Analytics?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                By understanding customer behavior and preferences, our clients
                can tailor their marketing efforts to target the right audience
                with the right message at the right time. This leads to higher
                conversion rates, increased customer engagement, and improved
                return on marketing investment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle2">
                How is Customer Segmentation useful to me?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our clients can identify their most valuable customer segments
                and tailor their products, services, and marketing strategies to
                meet their specific needs. This enhances customer satisfaction,
                loyalty, and retention, leading to long-term profitability and
                sustainable growth.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
