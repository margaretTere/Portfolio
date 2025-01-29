import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profileImage.jpg'; // Import your image

const HomePage = () => (
  <Container>
    <ProfileSection>
      <ProfileImage src={profileImage} alt="Profile" />
      <ProfileText>
        <h1>Welcome to My Portfolio</h1>
        <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world." – Albert Einstein</p>
        <p> As a developer, I believe imagination fuels innovation and drives progress. My career is shaped by a commitment to creativity, problem-solving, and lifelong learning. Inspired by the limitless potential of technology, I strive to build solutions that not only address challenges but also inspire others to imagine and innovate. My goal is to evolve as both a creator and a collaborator, contributing meaningfully to the dynamic landscape of technology.</p>
        <h1>About me</h1>
        <p>
          Currently studying Computer Programming and Analysis at George Brown College (T197 Program). 
          This program provides an understanding of web development, applied programming logic, business 
          applications for technology, and math for computer technology. I am a hardworking individual 
          who loves to challenge myself with projects, explore new technologies, and constantly learn new things.
        </p>
        <h2>Skills</h2>
        <SkillList>
        <li>REACT</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>C#</li>
        <li>Java</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Swift</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Oracle</li>
        <li>MS SQL Server</li>
        <li>Linux</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>Cyber Security</li>
        <li>Shell Scripting</li>
        <li>IT Essentials with Cisco Networking</li>
      </SkillList>
        <p>
          <b>Strengths:</b> Hardworking, Team Player, and Creative.
        </p>
      </ProfileText>
    </ProfileSection>
  </Container>
);

export default HomePage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProfileText = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
  }
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  li {
    background: #f3f3f3;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 1em;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
