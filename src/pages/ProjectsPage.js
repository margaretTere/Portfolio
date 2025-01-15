import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'IRes - Intelligent Receptionist',
      description: 'An electronic receptionist to improve visitor interactions, reduce wait times, and automate delivery processes.',
      details: ['Node.js, React, MongoDB', 'Status: In progress'],
    },
    {
      title: 'E-Commerce Website',
      description: 'A responsive e-commerce website built with React and Firebase.',
      details: ['User authentication, real-time cart', 'Technologies: React, Firebase, Stripe API'],
    },
    {
      title: 'Weather App',
      description: 'A weather application using OpenWeather API to display current weather conditions.',
      details: ['Real-time data fetching', 'Technologies: JavaScript, HTML, CSS'],
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built to showcase my projects and skills.',
      details: ['React, Styled Components', 'Status: Live'],
    },
  ];

  return (
    <Container>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </ProjectCard>
      ))}
    </Container>
  );
};

export default ProjectsPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;
