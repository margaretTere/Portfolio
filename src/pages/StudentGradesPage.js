import React from 'react';
import styled from 'styled-components';

const GradesContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const TermSection = styled.div`
  margin-bottom: 40px;
`;

const TermTitle = styled.h2`
  margin-top: 30px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
`;

const Notes = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const grades = {
  fall2020: [
    { subjectCode: 'COMP 1151, 103', courseTitle: 'IT ESSENTIALS', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMM 1003, 136', courseTitle: 'ENGLISH SKILLS', campus: 'C', finalGrade: 'P', attemptedHours: '0.000', earnedHours: '0.000', gpaHours: '0.000', qualityPoints: '0.00' },
    { subjectCode: 'GSSC 1045, 103', courseTitle: 'BUS APPL. FOR INFO. TECHNOLOGY', campus: 'C', finalGrade: 'A', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '12.00' },
    { subjectCode: 'MATH 1162, 103', courseTitle: 'MATH FOR COMPUTER TECHNOLOGY I', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 1223, 103', courseTitle: 'WEB DEVELOPMENT FUNDAMENTALS', campus: 'C', finalGrade: 'A', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 1236, 101', courseTitle: 'APPLIED PROGRAMMING LOGIC', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
  ],
  winter2021: [
    { subjectCode: 'COMP 1231, 100', courseTitle: 'WEB PROGRAMMING', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 3044, 104', courseTitle: 'UNIX ESSENTIALS', campus: 'C', finalGrade: 'A+', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '12.00' },
    { subjectCode: 'COMP 1168, 100', courseTitle: 'DATABASE MANAGEMENT', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 1202, 100', courseTitle: 'OBJECT ORIENTED PROGRAMMING', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'MATH 1172, 100', courseTitle: 'MATH FOR COMPUTER TECH\'Y II', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'GSSC 1027, 103', courseTitle: 'PERSONAL FINANCE', campus: 'C', finalGrade: 'A-', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '11.10' },
    { subjectCode: 'COMM 1007, 149', courseTitle: 'COLLEGE ENGLISH', campus: 'C', finalGrade: 'A-', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '11.10' },
  ],
  fall2021: [
    { subjectCode: 'COMP 2138, 100', courseTitle: 'ADVANCED DATABASE DEVELOPMENT', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 1230, 100', courseTitle: 'ADVANCED WEB PROGRAMMING', campus: 'C', finalGrade: 'A', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 2130, 100', courseTitle: 'APPLICATION DEVELOPMENT USING JAVA', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'GHUM 1052, 100', courseTitle: 'WORLD RELIGIONS', campus: 'C', finalGrade: 'A', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '12.00' },
    { subjectCode: 'COMP 2129, 100', courseTitle: 'ADV OBJECT-ORIENTED PROGRAMMING', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 2147, 100', courseTitle: 'SYS ANALYSIS, DESN AND TESTING', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
  ],
  winter2022: [
    { subjectCode: 'COMP 2080, 100', courseTitle: 'DATA STRUCTURES & ALGORITHMS', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 2151, 100', courseTitle: 'AGILE SOFTWARE DEVELOPMENT', campus: 'C', finalGrade: 'A', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 2152, 103', courseTitle: 'OPEN SOURCE DEVELOPMENT', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'GHUM 1079, 100', courseTitle: 'FILM STUDIES', campus: 'C', finalGrade: 'B+', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '9.90' },
    { subjectCode: 'COMP 2139, 100', courseTitle: 'WEB APPLICATION DEVELOPMENT', campus: 'C', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 2148, 100', courseTitle: 'PROFESSIONAL WORKPLACE COMPET.', campus: 'C', finalGrade: 'A', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '12.00' },
  ],
  break2022to2024: 'Fall 2022 - Winter 2024: Took a professional break to work at Code Ninjas, mentoring students and honing skills in programming and project management.',
  fall2024: [
    { subjectCode: 'COMP 3059, 104', courseTitle: 'CAPSTONE PROJECT I', campus: 'ZS', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 3104, 104', courseTitle: 'DEVOPS', campus: 'ZS', finalGrade: 'A+', attemptedHours: '3.000', earnedHours: '3.000', gpaHours: '3.000', qualityPoints: '12.00' },
    { subjectCode: 'COMP 3074, 104', courseTitle: 'MOBILE APPL. DEVELOPMENT I', campus: 'ZS', finalGrade: 'A', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 3095, 104', courseTitle: 'WEB APPL DEVELOP. USING JAVA', campus: 'ZS', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 3122, 104', courseTitle: 'APPLIED DATA SCIENCE', campus: 'ZS', finalGrade: 'A', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
    { subjectCode: 'COMP 3123, 104', courseTitle: 'FULL STACK DEVELOPMENT I', campus: 'ZS', finalGrade: 'A+', attemptedHours: '4.000', earnedHours: '4.000', gpaHours: '4.000', qualityPoints: '16.00' },
  ],
};

const GradesPage = () => {
    return (
      <GradesContainer>
        <Title>Student Grades - Terechenko, Margaret (101297977)</Title>
        
        {Object.entries(grades).map(([term, gradesArray]) =>
          term === 'break2022to2024' ? (
            <Notes key={term}>{gradesArray}</Notes>
          ) : (
            <TermSection key={term}>
              <TermTitle>
                {term.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase())}
              </TermTitle>
              <Table>
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Course Title</th>
                    <th>Campus</th>
                    <th>Final Grade</th>
                    <th>Attempted Hours</th>
                    <th>Earned Hours</th>
                    <th>GPA Hours</th>
                    <th>Quality Points</th>
                  </tr>
                </thead>
                <tbody>
                  {gradesArray.map((grade, index) => (
                    <tr key={index}>
                      <td>{grade.subjectCode}</td>
                      <td>{grade.courseTitle}</td>
                      <td>{grade.campus}</td>
                      <td>{grade.finalGrade}</td>
                      <td>{grade.attemptedHours}</td>
                      <td>{grade.earnedHours}</td>
                      <td>{grade.gpaHours}</td>
                      <td>{grade.qualityPoints}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TermSection>
          )
        )}
      </GradesContainer>
    );
  };
  
export default GradesPage;
