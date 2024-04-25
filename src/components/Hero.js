import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #48ACF0, #FFF)"
            : `linear-gradient(#48ACF0, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align items vertically to the left
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
        className="container"
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            width: { xs: "100%", sm: "100%" },
            flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger screens
            justifyContent: { xs: "flex-start", sm: "space-between" }, // Align items to the left on small screens, space-between on larger screens
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
            {/* <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button variant="contained" color="primary">
                Start Today
              </Button>
            </Stack> */}
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
            We help our clients drive business success through comprehensive
            business intelligence services, encompassing performance evaluation,
            forecasting, customer segmentation and marketing analytics.
            <br /> <br /> Our capabilities provide businesses with the tools and
            insights they need to optimize their operations, improve
            decision-making, and drive sustainable profitability in an
            increasingly competitive business environment.
          </Typography>
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        /> */}
      </Container>
    </Box>
  );
}
