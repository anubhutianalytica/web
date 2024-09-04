import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import * as React from "react";
import blackLogo from "../assets/logos/Logo_NoBG.png";
import whiteLogo from "../assets/logos/Logo_white_NoBG.png";

const logoStyle = {
  width: "175px",
  height: "auto",
  pt: "15px",
  maxWidth: "100%", // Ensure the logo does not overflow
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={3}>
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
  const iconStyle = { fontSize: 40 };

  const [state, setState] = React.useState({
    open: false,
    text: "",
    icon: "",
  });
  const { text, icon, open } = state;

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setState({ ...state, open: true });
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box
      id="contactUs"
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 2, sm: 4 },
        color: "white",
        maxWidth: "100%", // Prevent overflow
        overflowX: "hidden", // Hide any potential overflow
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 2, sm: 2 },
          textAlign: { sm: "center", md: "left" },
          maxWidth: "100%", // Prevent overflow
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            maxWidth: "100%", // Prevent overflow
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              maxWidth: "100%", // Prevent overflow
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              color="text.primary"
              sx={{
                width: { sm: "50%", md: "60%" },
                textAlign: { sm: "left", md: "left" },
                pr: 3,
                mt: 3,
                maxWidth: "100%", // Prevent overflow
              }}
            >
              Contact Us
            </Typography>
            <Typography
              component="h5"
              color="text.primary"
              sx={{
                width: { sm: "50%", md: "70%" },
                textAlign: { sm: "left", md: "left" },
                pr: 3,
                maxWidth: "100%", // Prevent overflow
              }}
            >
              Phone: +91 9205966702
              <br />
              Email: contact@anubhutianalytics.com
              <br />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              minWidth: { xs: "50%", sm: "60%" },
              justifyContent: "end",
              maxWidth: "100%", // Prevent overflow
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "60%" },
                alignSelf: "center",
                textAlign: "right",
                maxWidth: "100%", // Prevent overflow
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  maxWidth: "100%", // Prevent overflow
                }}
              >
                <img
                  src={logo}
                  style={logoStyle}
                  alt="Logo of Anubhuti Analytics"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Change layout based on screen size
            justifyContent: { xs: "center", md: "space-between" },
            width: "100%",
            maxWidth: "100%", // Prevent overflow
          }}
        >
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
              maxWidth: "100%", // Prevent overflow
            }}
          >
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/company/anubhutianalytics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center", p: 2, mb: 5 }}
            >
              <LinkedInIcon sx={iconStyle} />
            </IconButton>
            <Tooltip title="contact@anubhutianalytics.com">
              <IconButton
                color="inherit"
                aria-label="mail"
                onClick={handleClick({
                  text: "contact@anubhutianalytics.com",
                  icon: "Mail",
                })}
                sx={{ alignSelf: "center", p: 2, mb: 5 }}
              >
                <EmailIcon sx={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="+91 9205966702">
              <IconButton
                color="inherit"
                aria-label="call"
                onClick={handleClick({ text: "+91 9205966702", icon: "Call" })}
                sx={{ alignSelf: "center", p: 2, mb: 5 }}
              >
                <CallIcon sx={iconStyle} />
              </IconButton>
            </Tooltip>
          </Stack>
          <Copyright />
        </Box>
      </Container>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{text}</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleCopy(text)}>Copy</Button>{" "}
          {icon === "Mail" && (
            <Button
              component={Link}
              href={`mailto:${text}`}
              target="_blank"
              rel="noopener"
              onClick={handleClose}
            >
              Email
            </Button>
          )}
          {icon === "Call" && (
            <Button
              component={Link}
              href={`tel:${text}`}
              target="_blank"
              rel="noopener"
              onClick={handleClose}
            >
              Call
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}