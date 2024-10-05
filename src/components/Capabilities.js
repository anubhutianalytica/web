import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import CapabilitiesCard from "./CapabilitiesCard";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const Capabilities = () => {
  const [capabilitiesData, setCapabilitiesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [goToSlide, setGoToSlide] = useState(null); // State for carousel slide management

  useEffect(() => {
    fetch("/capabilities/capabilities.json")
      .then((response) => response.json())
      .then((data) => {
        setCapabilitiesData(data);
        if (isMobile && data.length > 0) {
          const firstIndustry = [
            ...new Set(data.map((item) => item.industry)),
          ].sort()[0];
          setSelectedIndustry(firstIndustry);
          setFilteredData(
            data.filter((item) => item.industry === firstIndustry)
          );
        } else {
          setSelectedIndustry("");
          setFilteredData(data);
        }
      })
      .catch((error) =>
        console.error("Error fetching capabilities data:", error)
      );
  }, [isMobile]);

  useEffect(() => {
    if (selectedIndustry) {
      setFilteredData(
        capabilitiesData.filter((item) => item.industry === selectedIndustry)
      );
    } else {
      setFilteredData(capabilitiesData);
    }
  }, [selectedIndustry, capabilitiesData]);

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
  };

  const industries = [
    ...new Set(capabilitiesData.map((item) => item.industry)),
  ];

  // Prepare carousel cards for capabilities
  const carouselCards = filteredData.map((item, index) => ({
    key: index,
    content: (
      <CapabilitiesCard
        title={item.title}
        industry={item.industry}
        services={item.services}
        flow={item.flow}
        description={item.description}
        linkText={item.linkText}
        cardColor={item.color}
        isVertical={true}
      />
    ),
  }));

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
          <Typography component="h2" variant="h4" color="white">
            Consulting Capabilities
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Discover the services we offer to support your business growth.
          </Typography>
        </Box>

        {isMobile && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mb: 2,
              justifyContent: "center",
              overflowX: "auto",
              padding: "0 10px",
            }}
          >
            {industries.map((industry, index) => (
              <Button
                key={industry}
                onClick={() => handleIndustrySelect(industry)}
                color={selectedIndustry !== industry ? "primary" : "inherit"}
                variant={
                  selectedIndustry !== industry ? "contained" : "outlined"
                }
                sx={{ cursor: "pointer" }}
              >
                {industry}
              </Button>
            ))}
          </Box>
        )}

        {/* Carousel for Capabilities Cards on Mobile */}
        {isMobile && (
         <Box sx={{ width: "100%", height: "400px" }}>
            <Carousel
              slides={carouselCards}
              goToSlide={goToSlide}
              offsetRadius={3}
              showNavigation={false}
              animationConfig={config.gentle}
            />
          </Box>
        )}

        {/* Grid for Capabilities Cards on Desktop */}
        {!isMobile && (
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
        )}
      </Container>
    </Box>
  );
};

export default Capabilities;
