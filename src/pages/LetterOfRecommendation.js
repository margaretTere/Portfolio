import React from 'react';
import styled from 'styled-components';

const LetterContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Content = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 15px;
`;

const Signature = styled.div`
  margin-top: 20px;
  font-size: 1.1em;
`;

const LetterOfRecommendation = () => {
  return (
    <LetterContainer>
      <Title>Letter of Recommendation</Title>
      <Content>
        <strong>February 5, 2025</strong>
      </Content>
      <Content>
        I am pleased to write this letter of recommendation for Margaret Terechtchenko. As her instructor in COMP3059, 
        COMP3078, COMP3122, and COMP3132 at George Brown College, I have had the opportunity to witness her dedication 
        and intellectual curiosity firsthand.
      </Content>
      <Content>
        Margaret is a highly engaged participant in class discussions, bringing insightful perspectives and questions 
        that enrich the learning experience for everyone. She completes all assignments on time, often exceeding 
        expectations with her creativity and attention to detail.
      </Content>
      <Content>
        Beyond her own academic excellence, Margaret is also a supportive and collaborative classmate. She willingly 
        helps her peers, offering clear explanations and constructive feedback in a way that is both tactful and encouraging. 
        She conveys her ideas with clarity and professionalism.
      </Content>
      <Content>
        Margaret’s dedication to learning, coupled with her ability to work effectively with others, makes her an ideal 
        candidate for any academic or professional opportunity. I have no doubt that she will continue to excel in any 
        environment she chooses to pursue.
      </Content>
      <Content>
        Please feel free to contact me if you need any further information.
      </Content>
      <Signature>
        <p><strong>Sincerely,</strong></p>
        <p>Laily Ajellu</p>
        <p>Professor</p>
        <p>Research & Innovation, Principal Investigator (PI), Artificial Intelligence</p>
        <p>George Brown College</p>
        <p>160 Kendal Ave, Toronto, ON M5R 1M3, Canada</p>
        <p>Email: <a href="mailto:Laily.Ajellu@georgebrown.ca">Laily.Ajellu@georgebrown.ca</a></p>
      </Signature>
    </LetterContainer>
  );
};

export default LetterOfRecommendation;
