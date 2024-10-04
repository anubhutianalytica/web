import { Box, Card, CardContent, Typography, Tooltip } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog, showSubtitle = false }) {
  const navigate = useNavigate();

  const handleCardClick = (fileName) => {
    navigate(`/blog/${fileName}`);
  };

  return (
    <Box sx={{ px: 2 }}>
      <Card
        onClick={() => handleCardClick(blog.fileName)}
        sx={{
          cursor: "pointer",
          position: "relative",
          backgroundImage: `url(${
            blog.image || "/images/uploads/defaultBanner.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // For smooth hover effect
          "&:hover": {
            transform: "scale(1.05)", // Slightly enlarge on hover
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
          },
        }}
      >
        {/* Overlay to darken the background for text readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            zIndex: 1,
            transition: "background-color 0.3s ease", // Smooth transition for overlay
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Darken the overlay on hover
            },
          }}
        ></Box>

        {/* Blog content */}
        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Semi-transparent background for readability
            padding: "16px",
            textAlign: "center",
            backdropFilter: "blur(5px)", // Adds a subtle blur effect to the background
            transition: "backdrop-filter 0.3s ease", // Smooth transition for blur effect
            "&:hover": {
              backdropFilter: "blur(8px)", // Increase blur on hover
            },
          }}
        >
          <Tooltip title={blog.title}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center", // Ensures the text is centered properly
                padding: { xs: "0 10px", sm: "0 20px" }, // Adds some padding for smaller screens
                fontWeight: "bold",
                lineHeight: "1.2em",
                height: "3.4em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                alignContent: "center",
              }}
            >
              {blog.title}
            </Typography>
          </Tooltip>

          {showSubtitle && (
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                pt: 2,
              }}
            >
              {blog.subtitle}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
