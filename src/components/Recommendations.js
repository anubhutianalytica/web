import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Snackbar,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "Tell us more about your business and services you would like to talk about",
  });
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name.trim()) {
      setErrorMessage("Name is required.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setErrorMessage("Name must contain only letters.");
      return false;
    }

    // Email validation
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Invalid email format.");
      return false;
    }

    // Phone validation
    if (phone && !/^[\d\s+()-]+$/.test(phone)) {
      setErrorMessage("Invalid phone number format.");
      return false;
    }

    // Check that at least one of email or phone is provided
    if (!email && !phone) {
      setErrorMessage("Please provide at least one of Email or Phone.");
      return false;
    }

    // Message validation
    if (message && message.length > 500) {
      setErrorMessage("Message cannot exceed 500 characters.");
      return false;
    }

    // Clear error message if all validations pass
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSnackbarOpen(true);
      return; // Stop the submission process
    }

    const templateParams = {
      from_name: sanitizeInput(formData.name),
      user_email: sanitizeInput(formData.email),
      user_phone: sanitizeInput(formData.phone),
      message: sanitizeInput(formData.message),
      recommendations: recommendations.join(", "),
    };

    emailjs
      .send(
        "service_uz2igzf",
        "template_9ybq53v",
        templateParams,
        "veRG3IhECuVx5HtGC"
      )
      .then((result) => {
        console.log(result.text);
        setThankYouMessageVisible(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const sanitizeInput = (input) => {
    // Remove potential harmful characters and trim the input
    return input.replace(/<[^>]*>/g, "").trim();
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const uniqueRecommendations = [...new Set(recommendations)];

  return (
    <Box
      sx={{
        backgroundColor: "primary.contrastText",
        borderRadius: 3,
        p: 4,
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        mt: 2,
      }}
    >
      {thankYouMessageVisible ? (
        <Typography variant="h6" sx={{ color: "green", textAlign: "center" }}>
          Thank you! Your message has been sent.
        </Typography>
      ) : (
        <>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.dark", mb: 3 }}
          >
            Our Analysis Recommends the Following Services:
          </Typography>

          <List
            sx={{
              backgroundColor: "secondary.contrastText",
              borderRadius: 3,
              p: 2,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {uniqueRecommendations.length > 0 ? (
              uniqueRecommendations.map((rec, idx) => (
                <ListItem key={idx}>
                  <ListItemText
                    primary={rec}
                    primaryTypographyProps={{
                      color: "#007bff",
                      fontWeight: "medium",
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText
                  primary="No recommendations available."
                  primaryTypographyProps={{ color: "#d9534f" }}
                />
              </ListItem>
            )}
          </List>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ marginTop: "20px" }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "grey.0",
                textAlign: "center",
                fontSize: "1.2rem",
                bgcolor: "secondary.main",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              🌟 Connect with us and unlock exclusive offers! Get a{" "}
              <u>20% discount</u> on our services and experience the best we
              have to offer! 🎉
            </Typography>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
                sx={{ bgcolor: "white" }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                sx={{ bgcolor: "white" }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <OutlinedInput
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                label="Phone"
                sx={{ bgcolor: "white" }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="message">Message</InputLabel>
              <OutlinedInput
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                multiline
                rows={4}
                sx={{ bgcolor: "white" }}
              />
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={errorMessage}
          />
        </>
      )}
    </Box>
  );
};

export default Recommendations;
