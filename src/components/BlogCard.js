import {
  Box,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
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
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
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
            backdropFilter: "blur(1px)", // Adds a subtle blur effect to the background
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              lineHeight: "1.2em",
              height: "2.4em",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {blog.title}
          </Typography>
          <Typography variant="body2" color="inherit">
            {blog.subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
