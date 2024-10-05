import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Chip,
  useMediaQuery,
} from "@mui/material";
import CapabilitiesCard from "./CapabilitiesCard";

const Capabilities = () => {
  const [capabilitiesData, setCapabilitiesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // For displaying filtered capabilities
  const [industries, setIndustries] = useState([]); // Available industries
  const [selectedIndustry, setSelectedIndustry] = useState(""); // Currently selected industry
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Check if the viewport is mobile

  useEffect(() => {
    fetch("/capabilities/capabilities.json")
      .then((response) => response.json())
      .then((data) => {
        setCapabilitiesData(data);

        // Set industries state based on viewport
        const uniqueIndustries = [
          ...new Set(data.map((item) => item.industry)),
        ];
        setIndustries(uniqueIndustries); // Set all unique industries

        // On mobile, set the default selected industry to the first alphabetically
        if (isMobile && uniqueIndustries.length > 0) {
          const firstIndustry = uniqueIndustries.sort()[0];
          setSelectedIndustry(firstIndustry); // Set the first industry as selected
        }
        // Initialize filtered data based on the selected industry
        setFilteredData(isMobile ? data : data); // On mobile, show all data initially
      })
      .catch((error) =>
        console.error("Error fetching capabilities data:", error)
      );
  }, []); // Only fetch data on mount

  useEffect(() => {
    // Filter capabilities based on selected industry
    if (selectedIndustry) {
      setFilteredData(
        capabilitiesData.filter((item) => item.industry === selectedIndustry)
      );
    } else {
      setFilteredData(capabilitiesData); // Reset to all capabilities if no industry is selected
    }
  }, [selectedIndustry, capabilitiesData]);

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry); // Update selected industry when a chip is clicked
  };

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

        {/* Display chips for industries on mobile */}
        {isMobile && (
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            {industries.map((industry, index) => (
              <Chip
                key={index}
                label={industry}
                onClick={() => handleIndustrySelect(industry)}
                color={selectedIndustry === industry ? "primary" : "default"}
                variant={selectedIndustry === industry ? "filled" : "outlined"}
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Box>
        )}

        <Grid container spacing={2.5}>
          {filteredData.map((item, index) => (
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
