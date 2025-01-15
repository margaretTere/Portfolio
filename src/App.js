import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Navigation bar
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Container from './components/Container'; // Optional for layout consistency

function App() {
  return (
    <Router>
      <Header /> 
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/resume" element={<ResumePage />} /> 
          <Route path="/projects" element={<ProjectsPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
