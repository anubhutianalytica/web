import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

const Recommendations = ({ recommendations }) => {
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
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.dark",
          mb: 2,
        }}
      >
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
            <ListItem
              key={idx}
              sx={{
                borderBottom: idx < recommendations.length - 1 ? "1px solid #e0e0e0" : "none",
                "&:hover": {
                  backgroundColor: "success.light",
                },
              }}
            >
              <ListItemText
                primary={rec}
                primaryTypographyProps={{
                  color: "secondary.dark",
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
              primaryTypographyProps={{
                color: "error.light",
              }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Recommendations;