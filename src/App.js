import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import BlogList from "./views/BlogList";
import Blog from "./views/Blog";
import getLPTheme from "./actions/getLPTheme";
import "./styles/App.css";
import Quiz from "./views/Quiz";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const LPtheme = createTheme(getLPTheme("light"));

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:fileName" element={<Blog />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </ThemeProvider>
        </header>
      </div>
    </Router>
  );
}

export default App;
