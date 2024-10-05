import React from "react";
import { Card, Typography } from "@mui/material";

const CapabilitiesCard = ({
  title,
  industry,
  description,
  cardColor,
  isVertical = false,
}) => {
  return (
    <Card
      sx={{
        p: 3,
        height: isVertical ? "300px" : "200px", // Adjust height based on orientation
        width: isVertical ? "200px" : "auto", // Fixed width for vertical cards
        backgroundColor: cardColor || "grey.500", // Default color if industry is not in the map
        color: "white",
        borderRadius: 2,
        boxShadow: 3, // Add shadow for a modern look
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition for hover effects
        "&:hover": {
          transform: "scale(1.05)", // Scale effect on hover
          boxShadow: 6, // Enhance shadow on hover
        },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", lineHeight: 1.2 }} // Adjust line height for better spacing
      >
        {title}
      </Typography>
      {!isVertical && ( // Render industry only if not in vertical mode
        <Typography variant="subtitle1" sx={{ mb: 1, fontStyle: "italic" }}>
          {industry}
        </Typography>
      )}
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          ...(isVertical ? {} : { WebkitLineClamp: 4 }),
        }}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default CapabilitiesCard;
