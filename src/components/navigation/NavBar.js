import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/system";
import blackLogo from "../../assets/logos/Logo_NoBG.png";
import whiteLogo from "../../assets/logos/Logo_white_NoBG.png";
import NavBarMenuItem from "./AppBar.MenuItem";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const logo = theme.palette.mode === "light" ? blackLogo : whiteLogo;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const isHomePage = window.location.pathname === "/";

    if (!isHomePage) {
      // Navigate to the home page
      window.location.href = "/";

      // Use a delay to ensure the navigation happens before scrolling
      setTimeout(() => {
        // Scroll to the section after navigation
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
          const targetScroll = sectionElement.offsetTop - offset;
          sectionElement.scrollIntoView({ behavior: "smooth" });
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }, 300); // Adjust the delay as needed
    } else {
      // Directly scroll to the section if already on the home page
      const sectionElement = document.getElementById(sectionId);
      const offset = 128;
      if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset;
        sectionElement.scrollIntoView({ behavior: "smooth" });
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
        setOpen(false);
      }
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 0,
              }}
            >
              <Box sx={{ mr: "auto", mt: "10px" }}>
                <img
                  src={logo}
                  style={logoStyle}
                  alt="Logo of Anubhuti Analytics"
                  onClick={() => (window.location.href = "/")}
                />
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <NavBarMenuItem
                  text={"Why Us?"}
                  onClick={() => scrollToSection("whyUs")}
                />
                <NavBarMenuItem
                  text={"Capabilities"}
                  onClick={() => scrollToSection("capabilities")}
                />
                <NavBarMenuItem
                  text={"How We Help"}
                  onClick={() => scrollToSection("howWeHelp")}
                />
                <NavBarMenuItem
                  text={"Services"}
                  onClick={() => scrollToSection("services")}
                />
                <NavBarMenuItem
                  text={"Contact Us"}
                  onClick={() => scrollToSection("contactUs")}
                />
                <NavBarMenuItem
                  text={"Blog"}
                  onClick={() => (window.location.href = "/blog")}
                />
              </Box>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem onClick={() => scrollToSection("whyUs")}>
                    Why Us?
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("capabilities")}>
                    Capabilities
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("howWeHelp")}>
                    How We Help
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("services")}>
                    Services
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("contactUs")}>
                    Contact Us
                  </MenuItem>
                  <MenuItem onClick={() => (window.location.href = "/blog")}>
                    Blog
                  </MenuItem>

                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="tel:+91 9205966702"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Contact Us
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
