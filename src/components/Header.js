import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";

export default function Header() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        maxHeight: "8vh",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #48ACF0, #FFF)"
            : `linear-gradient(#48ACF0, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 100%", // Adjust to cover more space
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          pt: { xs: 6, sm: 8 }, // Increase padding to adjust content
          pb: { xs: 12, sm: 16 }, // Ensure there's enough space for the gradient
        }}
        className="container"
      >
      </Container>
    </Box>
  );
}