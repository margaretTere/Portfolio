import React from 'react';
import styled from 'styled-components';

const coverLetter = () => (
  <Container>
    <h1>Cover Letter</h1>

    <Section>
      <p><strong>Margaret Terechenko</strong></p>
      <p>Toronto, ON</p>
     
      <p><a href="mailto:may.terechenko@gmail.com">may.terechenko@gmail.com</a></p>
     
    </Section>

    <Section>
      <p><strong>To Whom It May Concern,</strong></p>

      <p>
        I am writing to express my interest in programming opportunities that match my skills and experiences. As a recent graduate of the Computer Programming and Analysis program at George Brown College, I have developed a strong foundation in software development, web technologies, and database management.
      </p>

      <p>
        My academic project, the IRes Project, provided hands-on experience with technologies like React, Node.js, and MongoDB, showcasing my ability to develop efficient backend systems and user-friendly interfaces. Additionally SketchHead is a game developed using Unity and C# during my time mentoring at Code Ninjas. While it is a Code Ninjas project, I contributed significantly by guiding young programmers, refining gameplay mechanics, and ensuring an engaging user experience. This project reflects both my technical skills and my ability to mentor aspiring developers in game creation.
      </p>

      <p>
        Beyond my academic experience, I have honed my communication and teamwork skills during my time as a Sensei at Code Ninjas, where I mentored young programmers and guided them in learning JavaScript, Lua, and Unity C#. These experiences have strengthened my ability to adapt and collaborate in diverse environments.
      </p>

      <p>
        Thank you for considering my application. Please feel free to contact me via email at <a href="mailto:may.terechenko@gmail.com">may.terechenko@gmail.com</a> for further discussion. I look forward to the opportunity to contribute to your team.
      </p>

      <p>Sincerely,</p>
      <p>Margaret Terechenko</p>
    </Section>
  </Container>
);

export default coverLetter;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 1em;
    line-height: 1.6;
    margin: 5px 0;
  }
`;
