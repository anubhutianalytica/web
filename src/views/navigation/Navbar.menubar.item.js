import Typography from "@mui/material/Typography";
import React from "react";
import "../../styles/Navbar.css";

export default function NavbarMenubarItem( {text}) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        ml: 5,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".2rem",
        color: "white",
        textDecoration: "none",
      }}
    >
      {text}
    </Typography>
  );
}
