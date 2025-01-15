import React from 'react';
import Container from '../components/Container'; // Import the Container component

const ResumePage = () => (
  <Container>
    <h1>Resume</h1>
    <h3>Education</h3>
    <p>George Brown College - Computer Programming and Analytics</p>
    <h3>Skills</h3>
    <ul>
      <li>HTML, CSS, JavaScript, Python, etc.</li>
      <li>Team player and creative problem-solver.</li>
    </ul>
    <h3>Experience</h3>
    <ul>
      <li>Code Ninjas - Sensei (Taught programming to kids).</li>
      <li>E-commerce Website - Built using React and Firebase.</li>
    </ul>
  </Container>
);

export default ResumePage;
