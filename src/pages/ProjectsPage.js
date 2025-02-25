import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'IRes Project',
      description: `An electronic receptionist aimed at improving visitor interactions and reducing inefficiencies. 
      This was a group project based on my idea. I set up the project, led the team, and contributed significantly by 
      doing most of the work and guiding the team. The project used React for the frontend, Node.js and Express for the backend, and MongoDB as the database.`,
      subProjects: [
        {
          title: 'Capstone Frontend',
          link: 'https://github.com/TE109/mobileAppGroupAssinment',
        },
        {
          title: 'Capstone Backend',
          link: 'https://github.com/TE109/Capstone-Backend',
        },
        {
          title: 'IRES Project Summary',
          link: 'https://docs.google.com/document/d/1HnDT_7gpjEadmbCt5zxBQuxe1uiMSLh9CHn_P6gUJNA/edit?tab=t.0',
        },
        {
          title: 'IRES ​​Project Vision',
          link: 'https://docs.google.com/document/d/1myUjzsa8qTPzRpWqGOIpfQum3IAH10qyj3hJVlWxx5U/edit?tab=t.0',
        },
        {
          title: 'IRES Project Plan',
          link: 'https://docs.google.com/document/d/1mBTKsWJo_jF03JB1DN7DDNPwu2WhsLV-jgxve4DQoag/edit?tab=t.0',
        },
        {
          title: 'IRES Requirements Analysis and Design',
          link: 'https://docs.google.com/document/d/1j-UIlYWhRFfYoDKX3aHfIWYXM29QKsrbYWXFyBAZrRI/edit?tab=t.0',
        },
        {
          title: 'IRES Mockup',
          link: 'https://www.figma.com/design/wfgChMTvw90RngjHYlP2ga/IRES?node-id=0-1&p=f&t=lAhh9AiRy7lqVhYP-0',
        },
        {
          title: 'IRES Project Status Report I',
          link: 'https://docs.google.com/document/d/1mBIs2cm90A1XuAARTc5kvRanfNdlpkh2z_hfhADb5n8/edit?tab=t.0',
        },
      ],
    },
    {
      title: 'Lab1 - Prime Number Game (SwiftUI)',
      description: `An interactive iOS application developed using SwiftUI. The app generates random numbers, and users must 
      determine if they are prime within a 5-second timer. It includes real-time feedback, a scoring system, and a pop-up summary after every 10 attempts.`,
      link: 'https://github.com/margaretTere/Lab1_Margaret_Terechtchenko',
    },
    {
      title: 'SketchHead',
      description: `A project created using C# and Unity, showcasing drawing and sketching functionalities. 
      This is one of the games I helped kids build during my time at Code Ninjas.`,
      link: 'https://github.com/margaretTere/SketchHead',
    },
    {
      title: 'Lab Test 1 - Real-time Chat Application',
      description: `A real-time chat application allowing users to join predefined rooms and send messages instantly using 
      Socket.io. Features include user authentication, private messaging, MongoDB-based message storage, and a typing indicator.`,
      link: 'https://github.com/margaretTere/101297977_lab_test1_chat_app',
    },
    
    {
      title: 'COMP3123 Assignment 2',
      description: `A backend API project designed to manage a list of tasks. This project allows users to perform CRUD operations 
      (Create, Read, Update, Delete) on tasks stored in a MongoDB database. Developed using Node.js and Express, the API includes 
      features like data validation with middleware and API testing with Postman.`,
      link: 'https://github.com/margaretTere/101297977_COMP3123_Assignment2',
    },
  ];

  return (
    <Container>
      <h1>My Projects</h1>

      <ContactInfo>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/margaretTere" target="_blank" rel="noopener noreferrer">@margaretTere</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:may.terechenko@gmail.com">may.terechenko@gmail.com</a>
        </p>
        <p>
          Message me to invite you as a collaborator if you'd like access to my private projects!
        </p>
      </ContactInfo>

      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.subProjects ? (
              <ul>
                {project.subProjects.map((subProject, subIndex) => (
                  <li key={subIndex}>
                    <a href={subProject.link} target="_blank" rel="noopener noreferrer">
                      {subProject.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </ProjectCard>
        ))}
      </ProjectList>
    </Container>
  );
};

export default ProjectsPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  p {
    font-size: 1.1em;
    margin: 5px 0;
  }

  a {
    color: #0073e6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    margin-bottom: 15px;
    color: #555;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
  }

  a {
    color: #0073e6;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
