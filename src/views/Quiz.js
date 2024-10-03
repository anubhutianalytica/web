import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Layout from "./Layout";
import Header from "../components/Header";

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
  const [recommendationLogic, setRecommendationLogic] = useState({});

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
      {!showRecommendations ? (
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={question.id} style={{ display: step === index ? "block" : "none" }}>
              <Typography variant="h6">{question.label}</Typography>
              {question.type === "radio" && (
                <RadioGroup name={question.id} onChange={handleChange}>
                  {question.options.map((option, idx) => (
                    <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              )}
              {question.type === "checkbox" && (
                <FormControl fullWidth>
                  <InputLabel>Challenges</InputLabel>
                  <Select
                    multiple
                    value={answers.challenges}
                    onChange={handleMultiSelectChange}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {question.options.map((option, idx) => (
                      <MenuItem key={idx} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
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
    </Container>
    </Layout>
  );
};

export default Quiz;