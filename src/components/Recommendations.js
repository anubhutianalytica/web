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
} from "@mui/material";
import emailjs from "emailjs-com";

const Recommendations = ({ recommendations }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
      recommendations: recommendations.join(", "),
    };

    emailjs
      .send("service_id", "template_id", templateParams, "user_id")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // Remove duplicates from recommendations
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
          <u>20% discount</u> on our services and experience the best we have to
          offer! 🎉
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
          Connect
        </Button>
      </Box>
    </Box>
  );
};

export default Recommendations;
