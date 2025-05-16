import React from 'react';
import styled from 'styled-components';

const ResumePage = () => (
  <Container>
    <h1>Resume</h1>

    <Section>
      <h2>Margaret Terechenko</h2>
      <p>Toronto, ON |  | <a href="mailto:may.terechenko@gmail.com">may.terechenko@gmail.com</a></p>
    </Section>

    <Section>
      <h2>Professional Summary</h2>
      <p>
          Graduate of the Computer Programming and Analysis diploma program at George Brown College, with a focus on software development, web development, and database management.   
          The program provides comprehensive training in designing, coding, and deploying applications across various platforms. 
          With hands-on experience in advanced programming concepts, I thrive in collaborative environments and enjoy learning new technologies. I am a hardworking person who loves to challenge myself with projects, and learn new things.
      </p>

    </Section>

    <Section>
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

      <p><b>Strengths:</b> Hardworking, Team Player, and Creative.</p>
    </Section>

    <Section>
      <h2>Experience</h2>
      <Experience>
        <h3>George Brown College - Computer Programming and Analysis T197</h3>
        <p>SEPTEMBER 2019 - PRESENT</p>
        <ul>
          <li>Learned how to use scrum in a workplace.</li>
          <li>I've learned REACT, node.js, Swift, MongoDB, HTML, CSS, Shell scripting, C#, Javascript, Java, Python, PHP, MySQL, Oracle, MS SQL Server, and Linux.</li>
          <li>Have collaborated with other students on projects, both as a member and a leader.</li>
          <li>Made several websites both for the courses and for my own projects.</li>
          <li>Discovered my favorite programming languages are JavaScript, Python, Swift, and HTML/CSS and technologies REACT, Node.js, Express, and MongoDB = MERN.</li>
        </ul>
      </Experience>

      <Experience>
        <h3>Code Ninjas Etobicoke North - Sensei</h3>
        <p>SEPTEMBER 2022 - AUGUST 2024</p>
        <ul>
          <li>Taught and assisted children, referred to as ninjas, in various programming languages such as MakeCode, Scratch, JavaScript, Lua, and Unity C#.</li>
          <li>Responsibilities included instructing and supporting ninjas aged 5-14.</li>
          <li>Implementing the curriculum for junior ninjas, and communicating with parents regarding the ninjas' progress.</li>
          <li>Working collaboratively with a team or independently with minimal supervision.</li>
          <li>Resolving conflicts and difficult situations with ninjas.</li>
          <li>Writing reports on each junior ninja's performance after sessions.</li>
          <li>Managing the Code Ninja’s TikTok account.</li>
          <li>Conducting game-building sessions for new ninjas to see if it's something they're interested in.</li>
          <li>Running all PA days camp, and junior summer camps.</li>
          <li>Creating the curriculum for junior classes.</li>
          <li>Trained Senseis for the junior ninja class and prepared them for teaching.</li>
          <li>Held the responsibility of opening and closing the center on some days, with possessing the key for access.</li>
        </ul>
      </Experience>

<Experience>
  <h3>Royal Canadian Air Cadets, Toronto - Sergeant</h3>
  <p>JANUARY 2013 - JUNE 2018</p>
  <ul>
    <li>Led fundraising initiatives for poppy sales and lottery tickets, recognized as a top seller.</li>
    <li>Managed a flight (group) of cadets, overseeing training and leadership development.</li>
    <li>Developed lesson plans and conducted training sessions for recruits.</li>
    <li>Completed various courses and training provided by the Canadian Military.</li>
  </ul>
</Experience>


    </Section>

    <Section>
      <h2>Education</h2>
      <Education>
        <p><b>George Brown College</b> - Computer Programming and Analytics</p>
        <p>SEPTEMBER 2020 - April</p>
        <p><b>Etobicoke Collegiate Institute</b> - High School Degree</p>
        <p>SEPTEMBER 2016 - JUNE 2020</p>
        <p>Clubs: Orchestra (Jazz) and Softball Team (Scores and Records)</p>
      </Education>
    </Section>

    <Section>
      <h2>References</h2>
      <p>Available upon request.</p>
    </Section>
  </Container>
);

export default ResumePage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    margin-bottom: 10px;
  }

  p, ul {
    font-size: 1em;
    line-height: 1.6;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 0;

  li {
    background: #f3f3f3;
    padding: 8px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Experience = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 5px;
  }

  ul {
    padding-left: 20px;
  }
`;

const Education = styled.div`
  p {
    margin-bottom: 5px;
  }
`;
