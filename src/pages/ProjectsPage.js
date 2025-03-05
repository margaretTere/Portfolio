import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'IRes Project',
      description: `The IRes Project is a secure and intelligent electronic receptionist system designed to enhance visitor management, streamline deliveries, 
      and improve security through automation. Utilizing multi-factor authentication (MFA), visitors must verify their identity via phone number and one-time passcodes before gaining access, 
      ensuring a secure check-in process. Delivery personnel receive pre-assigned access codes, eliminating delays and manual check-ins. The system automates notifications, instantly alerting hosts when visitors or packages arrive, 
      while maintaining detailed visitor and delivery logs for security tracking. Built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database, IRes provides a modern, scalable, and efficient solution. As the project leader,
       I spearheaded the design, development, and implementation, guiding the team to successfully bring this system to life.`,
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
          pdf: '/pdfs/COMP3059-F24-Project_Summary.pdf',
        },
        {
          title: 'IRES Project Vision',
          pdf: '/pdfs/COMP3059-F24-Project Vision Team 2.pdf',
        },
        {
          title: 'IRES Project Plan',
          pdf: '/pdfs/COMP3059-F24-Team2-IRES_Project Plan (2).pdf',
        },
        {
          title: 'IRES Requirements Analysis and Design',
          pdf: '/pdfs/COMP3059-Team2-F24-IRES-Requirements Analysis and Design.pdf',
        },
        {
          title: 'IRES Mockup',
          link: 'https://www.figma.com/design/wfgChMTvw90RngjHYlP2ga/IRES?node-id=0-1&p=f&t=lAhh9AiRy7lqVhYP-0',
        },
        {
          title: 'IRES Project Status Report I',
          pdf: '/pdfs/T2_IRES_ProjectStatusReport1 (2).pdf',
        },
        {
          title: 'IRES Project Status Report II',
          pdf: '/pdfs/W2025_COMP3078_Project_Status_Report_2_Team2_IRES (1).pdf',
        },
      ],
    },
    
    {
      title: 'Prime Number Game (SwiftUI)',
      description: `An interactive iOS game developed using SwiftUI. The game generates random numbers, and users must 
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
      title: 'Real-time Chat Application',
      description: `A real-time chat application allowing users to join predefined rooms and send messages instantly using 
      Socket.io. Features include user authentication, private messaging, MongoDB-based message storage, and a typing indicator.`,
      link: 'https://github.com/margaretTere/101297977_lab_test1_chat_app',
    },
    
    {
      title: 'Managing employees',
      description: `This is a full-stack, Dockerized, and containerized application built using the MERN stack, 
      where the frontend, backend, and database run in separate containers for scalability and efficiency. 
      The project features authentication, a fully functional REST API, and CRUD operations for employee management.
       Administrators can securely create, read, update, and delete employee records stored in a MongoDB database, 
       ensuring seamless data handling. Developed with Node.js and Express, 
       the API includes data validation middleware for reliability and API testing with Postman to ensure smooth functionality. 
`,
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
            <ul>
              {project.subProjects?.map((subProject, subIndex) => (
                <li key={subIndex}>
                  {subProject.link ? (
                    <a href={subProject.link} target="_blank" rel="noopener noreferrer">
                      {subProject.title} (External Link)
                    </a>
                  ) : (
                    <a href={subProject.pdf} target="_blank" rel="noopener noreferrer">
                      {subProject.title} (PDF)
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
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
