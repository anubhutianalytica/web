import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './views/LandingPage';
import BlogList from './views/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;