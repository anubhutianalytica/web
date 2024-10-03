import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const HeroButton = styled(Button)(({ theme }) => ({
  position: "relative",
  height: "60px",
  padding: "12px 24px",
  fontSize: "1.1rem",
  borderRadius: "8px",
  backgroundColor: "#007BFF", // Base background color
  color: theme.palette.common.white,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#0056b3", // Darker shade on hover
    transform: "scale(1.05)",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light overlay
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover:before": {
    opacity: 1, // Show overlay on hover
  },
}));

export default HeroButton;
