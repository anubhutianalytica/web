import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import BlogList from './views/BlogList';
import Blog from './views/Blog';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:fileName" element={<Blog />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;