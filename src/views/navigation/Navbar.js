import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import "../../styles/Navbar.css";
import NavbarLogobar from "./Navbar.logobar";
import NavbarMenubar from "./Navbar.menubar";
import NavbarSearch from "./Navbar.search";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="x2">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <NavbarLogobar />
          </Box>
          <Box sx={{ flexGrow: 5, justifyContent: "flex-end" }}>
            <NavbarSearch />
          </Box>
          <Box
            sx={{ flexGrow: 5, display: "flex", justifyContent: "flex-end" }}
          >
            <NavbarMenubar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
