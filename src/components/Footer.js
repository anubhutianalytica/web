import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import whiteLogo from "../assets/logos/Logo_white_NoBG.png";
import blackLogo from "../assets/logos/Logo_NoBG.png";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { useTheme } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Tooltip from '@mui/material/Tooltip';

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://anubhutianalytics.com/">
        Anubhuti Analytics&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const logo = theme.palette.mode === "light" ? blackLogo : whiteLogo;
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ ml: "-15px" }}>
                <img
                  src={logo}
                  style={logoStyle}
                  alt="Logo of Anubhuti Analytics"
                />
              </Box>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Subscribe to our newsletter for weekly updates and promotions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autoComplete: "off",
                    ariaLabel: "Enter your email address",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Product
            </Typography>
            <Link color="text.secondary" href="#">
              Features
            </Link>
            <Link color="text.secondary" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" href="#">
              Highlights
            </Link>
            <Link color="text.secondary" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" href="#">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 2, sm: 2 },
            width: "100%",
            // borderTop: "1px solid",
            // borderColor: "divider",
          }}
        >
          <div>
            {/* <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="#">
              Terms of Service
            </Link> */}
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            {/* <IconButton
              color="inherit"
              href="#"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="#"
              aria-label="X"
              sx={{ alignSelf: "center" }}
            >
              <TwitterIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/anubhutianalytics/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="mailto:contact@anubhutianalytics.com"
              aria-label="mail"
              sx={{ alignSelf: "center" }}
            >
              <EmailIcon />
            </IconButton>
            <Tooltip title="+91 9205966702">
              <IconButton
                color="inherit"
                href="tel:+91 9205966702"
                aria-label="call"
                sx={{ alignSelf: "center" }}
              >
                <CallIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
