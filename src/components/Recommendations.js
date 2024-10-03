import { useState } from "react";
import { List, ListItem, ListItemText, Typography, Box, TextField, Button } from "@mui/material";
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

    emailjs.send("service_uz2igzf", "template_9ybq53v", templateParams, "veRG3IhECuVx5HtGC")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "grey.50",
        borderRadius: 2,
        p: 3,
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.dark", mb: 2 }}>
        As per our analysis, the following services will help your business:
      </Typography>
      <List
        sx={{
          backgroundColor: "primary.contrastText",
          borderRadius: 1,
          p: 2,
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {recommendations.length > 0 ? (
          recommendations.map((rec, idx) => (
            <ListItem key={idx} sx={{ borderBottom: idx < recommendations.length - 1 ? "1px solid #e0e0e0" : "none" }}>
              <ListItemText
                primary={rec}
                primaryTypographyProps={{ color: "secondary.dark", fontWeight: "medium", fontSize: "1rem" }}
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText
              primary="No recommendations available."
              primaryTypographyProps={{ color: "error.light" }}
            />
          </ListItem>
        )}
      </List>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit" color="primary">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Recommendations;