import PropTypes from "prop-types";
import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const NavBarMenuItem = ({ text, onClick }) => {
  return (
    <MenuItem onClick={onClick} sx={{ py: "6px", px: "12px", ml: "15px" }}>
      <Typography variant="body2" color="text.primary">
        {text}
      </Typography>
    </MenuItem>
  );
};
NavBarMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBarMenuItem;
