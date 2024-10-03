import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import QuestionTracker from "../components/QuestionTracker";
import Recommendations from "../components/Recommendations";
import Layout from "./Layout";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: "",
    challenges: [],
    kpiInsights: "",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [recommendationLogic, setRecommendationLogic] = useState([]);
  const [error, setError] = useState("");

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

  const isAnswerSelected = () => {
    const currentQuestion = questions[step];
    const answer = answers[currentQuestion.id];

    // Check for radio question
    if (currentQuestion.type === "radio") {
      return !!answer;
    }

    // Check for checkbox question
    if (currentQuestion.type === "checkbox") {
      return answers.challenges.length > 0;
    }

    return false;
  };

  const handleNext = () => {
    if (isAnswerSelected()) {
      setError("");
      setStep((prev) => Math.min(prev + 1, questions.length - 1));
    } else {
      setError("Please answer the question before proceeding.");
    }
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
        <Typography
          variant="h4"
          sx={{ pt: { xs: 4, sm: 2 }, pb: { xs: 8, sm: 2 } }}
          gutterBottom
        >
          Getting to know you
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
                <div
                  key={question.id}
                  style={{ display: step === index ? "block" : "none" }}
                >
                  <Stack
                    className="stack-main"
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Stack spacing={2} className="options-stack">
                      {/* Use Stack to manage spacing */}
                      <Typography variant="h6">{question.label}</Typography>
                      {question.type === "radio" && (
                        <FormGroup>
                          {question.options.map((option, idx) => (
                            <FormControlLabel
                              key={idx}
                              control={
                                <Radio
                                  checked={answers[question.id] === option}
                                  onChange={handleChange}
                                  value={option}
                                  name={question.id}
                                />
                              }
                              label={option}
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
                                    checked={answers.challenges.includes(
                                      option
                                    )}
                                    onChange={(event) => {
                                      const newChallenges = event.target.checked
                                        ? [...answers.challenges, option]
                                        : answers.challenges.filter(
                                            (challenge) => challenge !== option
                                          );
                                      setAnswers((prev) => ({
                                        ...prev,
                                        challenges: newChallenges,
                                      }));
                                    }}
                                  />
                                }
                                label={option}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                      )}
                    </Stack>
                    <Stack spacing={2} className="tracker-stack">
                      {!isMobile && (
                        <QuestionTracker
                          currentStep={step}
                          totalSteps={questions.length}
                        />
                      )}
                    </Stack>
                  </Stack>
                  {error && (
                    <Typography color="error" sx={{ mt: 2 }}>
                      {error}
                    </Typography>
                  )}
                </div>
              ))}
              <div style={{ marginTop: "16px" }}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={step === questions.length - 1}
                  style={{ marginLeft: "8px" }}
                >
                  Next
                </Button>
                {step === questions.length - 1 && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "8px" }}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </form>
          ) : (
            <Recommendations recommendations={recommendations} />
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default Quiz;
