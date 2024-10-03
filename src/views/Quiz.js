import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import Layout from "./Layout";
import Header from "../components/Header";

const QuestionTracker = ({ currentStep, totalSteps }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: "16px",
        top: "16px",
        padding: "16px",
        backgroundColor: "#f5f5f5",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 1,
      }}
    >
      <Typography variant="h6">Progress</Typography>
      <Typography variant="body1">
        Question {currentStep + 1} of {totalSteps}
      </Typography>
    </Box>
  );
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: "",
    challenges: [],
    kpiInsights: "",
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [recommendationLogic, setRecommendationLogic] = useState([]);

  useEffect(() => {
    const fetchQuestionsAndRecommendations = async () => {
      const questionResponse = await fetch("/quiz/questions.json");
      const questionData = await questionResponse.json();
      setQuestions(questionData);

      const recommendationResponse = await fetch("/quiz/recommendations.json");
      const recommendationData = await recommendationResponse.json();
      setRecommendationLogic(recommendationData);
    };
    fetchQuestionsAndRecommendations();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (event) => {
    const { value } = event.target;
    setAnswers((prev) => ({ ...prev, challenges: value }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recommendations = [];

    // Goal-based recommendations
    const goalRecs = recommendationLogic.goals[answers.goal] || [];
    recommendations.push(...goalRecs);

    // Challenges-based recommendations
    answers.challenges.forEach((challenge) => {
      const challengeRecs = recommendationLogic.challenges[challenge] || [];
      recommendations.push(...challengeRecs);
    });

    setRecommendations(recommendations);
    setShowRecommendations(true);
  };

  return (
    <Layout>
      <Header />
    <Container>
      <Typography variant="h4" gutterBottom>
        Business Insight Quiz
      </Typography>
      <Box
        sx={{
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {!showRecommendations ? (
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={question.id} style={{ display: step === index ? "block" : "none" }}>
                <Typography variant="h6">{question.label}</Typography>
                {question.type === "radio" && (
                  <FormGroup>
                    {question.options.map((option, idx) => (
                      <FormControlLabel
                        key={idx}
                        control={<Checkbox />}
                        label={option}
                        onChange={handleChange}
                        value={option}
                        checked={answers[question.id] === option}
                      />
                    ))}
                  </FormGroup>
                )}
                {question.type === "checkbox" && (
                  <FormControl component="fieldset">
                    <FormGroup>
                      {question.options.map((option, idx) => (
                        <FormControlLabel
                          key={idx}
                          control={
                            <Checkbox
                              checked={answers.challenges.includes(option)}
                              onChange={(event) => {
                                const newChallenges = event.target.checked
                                  ? [...answers.challenges, option]
                                  : answers.challenges.filter((challenge) => challenge !== option);
                                setAnswers((prev) => ({ ...prev, challenges: newChallenges }));
                              }}
                            />
                          }
                          label={option}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                )}
              </div>
            ))}
            <div style={{ marginTop: "16px" }}>
              <Button variant="contained" onClick={handleBack} disabled={step === 0}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext} disabled={step === questions.length - 1} style={{ marginLeft: "8px" }}>
                Next
              </Button>
              {step === questions.length - 1 && (
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: "8px" }}>
                  Submit
                </Button>
              )}
            </div>
          </form>
        ) : (
          <div>
            <Typography variant="h5" gutterBottom>
              Recommendations
            </Typography>
            <List>
              {recommendations.length > 0 ? (
                recommendations.map((rec, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={rec} />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="No recommendations available." />
                </ListItem>
              )}
            </List>
          </div>
        )}
      </Box>
      {/* Add the progress tracker only for desktop */}
      {/* {window.innerWidth >= 600 && <QuestionTracker currentStep={step} totalSteps={questions.length} />} */}
    </Container>
    </Layout>
  );
};

export default Quiz;