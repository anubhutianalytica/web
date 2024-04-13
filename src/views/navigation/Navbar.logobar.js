import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import icon from "../../assets/icons/icon.png";
import "../../styles/Navbar.css";
import NavbarMenubarItem from "./Navbar.menubar.item";

export default function NavbarLogobar() {
  const mobileView = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
        <img src={icon} className="App-icon" alt="icon" />
      </Box>
      {!mobileView && (
        <Box
          sx={{
            flexGrow: 40,
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <NavbarMenubarItem text="Anubhuti Analytics" />
        </Box>
      )}
    </>
  );
}