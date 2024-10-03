import { Box, Typography, LinearProgress } from "@mui/material";

const QuestionTracker = ({ currentStep, totalSteps }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "primary.contrastText",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
        width: '100%', // Full width for better responsiveness
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
        Progress
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(currentStep / totalSteps) * 100}
        sx={{
          height: 10,
          borderRadius: 5,
          marginBottom: 2,
          backgroundColor: "grey.0",
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
            backgroundColor: "primary.main", // Custom color for the progress bar
          },
        }}
      />
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        Question {currentStep + 1} of {totalSteps}
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <Box
            key={index}
            sx={{
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                index < currentStep ? "primary.main" : index === currentStep ? "secondary.main" : "grey.300",
              color: index === currentStep ? "black" : "white",
              marginBottom: "6px",
              transition: "background-color 0.3s, transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)", // Slight hover effect
              },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Question {index + 1}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default QuestionTracker;