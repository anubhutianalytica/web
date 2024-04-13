import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import icon from "../../assets/icons/icon.png";
import "../../styles/Navbar.css";

export default function NavbarLogobar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
          <img src={icon} className="App-icon" alt="icon" />
      </Box>
      <Box sx={{ flexGrow: 40, justifyContent: "flex-start" }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            ml: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Anubhuti Analytics
        </Typography>
      </Box>
    </>
  );
}
