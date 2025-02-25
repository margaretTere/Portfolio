import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Container from './components/Container'; 
import CoverLetter from './pages/CoverLetter';
import GradesPage from './pages/StudentGradesPage'
import LetterOfRecommendation from './pages/LetterOfRecommendation';

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
          <Route path="/coverLetter" element={<CoverLetter/>} />
          <Route path="/gradesPage" element={<GradesPage/>} />
          <Route path="/recommendation" element={<LetterOfRecommendation />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
