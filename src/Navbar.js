import { Box, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import "./Navbar.css";
import icon from "./icon.png";

export default function Navbar() {
  const my_pages = ["Solutions", "Products"];
  const my_settings = ["Contact Us", "About Us"];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenSettingsMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <img src={icon} className="App-icon" alt="icon" />
        <Tooltip title="Know more">
          <p onClick={handleOpenSettingsMenu} className="brand-name">
            Anubhuti Analytics
          </p>
        </Tooltip>
        <Box className="settings-menu">
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseSettingsMenu}
          >
            {my_settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box className="pages">
          {my_pages.map((page) => (
            <Button key={page} className="page-button">
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}