import React, { useEffect, useState } from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import CapabilitiesCard from "./CapabilitiesCard";

const Capabilities = () => {
  const [capabilitiesData, setCapabilitiesData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/capabilities/capabilities.json")
      .then((response) => response.json())
      .then((data) => setCapabilitiesData(data))
      .catch((error) =>
        console.error("Error fetching capabilities data:", error)
      );
  }, []);

  return (
    <Box
      id="capabilities"
      sx={{
        pt: { xs: 4, sm: 10 },
        pb: { xs: 4, sm: 12 },
        color: "white",
        bgcolor: "grey.900",
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
            className="capabilities-main-title"
            component="h2"
            variant="h4"
            color="white"
          >
            Consulting Capabilities
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Discover the services we offer to support your business growth.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {capabilitiesData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CapabilitiesCard
                title={item.title}
                industry={item.industry}
                services={item.services}
                flow={item.flow}
                description={item.description}
                linkText={item.linkText}
                cardColor={item.color}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Capabilities;
