import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 2 },
        pl: { xs: 0, sm: 20 },
      }}
      className="container"
    >
      <Stack
        spacing={1}
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
              xs: "",
              sm: "radial-gradient(circle closest-side, rgba(72, 172, 240, 0.35) 0%, rgba(181, 37, 37, 0) 100%)",
            },
            textAlign: "center",
            fontSize: "clamp(3.5rem, 10vw, 4rem)",
          }}
        >
          Manage Your
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
            Growing
          </Typography>
          Business
        </Typography>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            textAlign: "center",
            pt: { xs: 4, sm: 10 },
            pb: { xs: 2, sm: 2 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              lineHeight: "1.4",
              color: "#333",
              maxWidth: "60%",
            }}
          >
            Unlock the full potential of your business with tailored analytics
            and expert insights.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: "12px 24px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#155a9a",
              },
            }}
            onClick={() => navigate("/quiz")}
          >
            Click here to take the quiz
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
