import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Hero() {
  return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          pt: { xs: 4, sm: 2 },
          pb: { xs: 8, sm: 2 },
        }}
        className="container"
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            width: { xs: "100%", sm: "100%" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "space-between" },
            alignItems: "flex-start",
          }}
          className="about-us-stack"
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              alignSelf: "center",
              background: {
                xs: "", sm: "radial-gradient(circle closest-side, rgba(72, 172, 240, 0.35) 0%, rgba(181, 37, 37, 0) 100%)"},
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Delivering
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Impactful Services
            </Typography>
          </Typography>
          <Typography
            textAlign={{ xs: "center", sm: "end" }}
            color="text.secondary"
            variant="h6"
            sx={{
              alignSelf: "center",
              width: { sm: "100%", md: "50%" },
              pt: 0,
            }}
          >
            Small & Medium Businesses require customized and affordable analytics and consulting - driven by this principle,
            we solve business problems of business dashboards, forecasting, marketing analytics, and analytics software.
          </Typography>
        </Stack>
      </Container>
  );
}
