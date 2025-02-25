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
          Currently pursuing a Computer Programming and Analysis diploma at George Brown College, specializing in software development, web development, and database management. 
          The program provides comprehensive training in designing, coding, and deploying applications across various platforms. 
          With hands-on experience in advanced programming concepts, I thrive in collaborative environments and learn new technologies. I am a hardworking person, and love to challenge myself with projects, and learn new things. 

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
        <h3>City Sightseeing Toronto - Sales ambassador</h3>
        <p>JUNE 2022 - AUGUST 2022</p>
        <ul>
          <li>Sell tours/tickets for Toronto, Niagara, CN Tower, Casa Loma, Little Canada, ROM, and Hockey Hall Of Fame.</li>
          <li>Customer service experience - In selling tickets, greeting customers and making them feel welcome, advertising, giving directions, and answering questions.</li>
          <li>Cash handling - accepting payments, handling payment terminal transactions.</li>
          <li>Selling pitch to customers to purchase a ticket.</li>
          <li>Working with a team or individually with little to no supervision.</li>
          <li>Helping/Showing customers/Advising customers where to go.</li>
          <li>Learning the history of Toronto to better serve customers.</li>
          <li>Dealing with difficult situations with customers and handling difficult customers.</li>
        </ul>
      </Experience>

      <Experience>
  <h3>Brands Gone Wild - Cashier and Floor</h3>
  <p>MAY 2020 - SEPTEMBER 2020</p>
  <ul>
    <li>Managed physical inventory and store records.</li>
    <li>Maintained an organized inventory with sizing and categorization.</li>
    <li>Provided technical training and created signs using Microsoft Office.</li>
    <li>Worked as a cashier, ensuring accurate and efficient service.</li>
    <li>Handled customer service online, by phone, and in person.</li>
  </ul>
</Experience>

<Experience>
  <h3>Pastucci’s / Partnered with Cheesecake - Food Handling</h3>
  <p>JANUARY 2020 - JUNE 2020</p>
  <ul>
    <li>Ensured the restaurant was presentable and made customers feel welcome.</li>
    <li>Prepared food while ensuring compliance with health codes.</li>
    <li>Provided customer service and resolved conflicts between staff and customers.</li>
    <li>Managed order processing through apps like UberEats, DoorDash, and Foodora.</li>
  </ul>
</Experience>

<Experience>
  <h3>Zellers / Hudson Bay - Cashier and Floor</h3>
  <p>MARCH 2019 - JANUARY 2020 (Closed)</p>
  <ul>
    <li>Trained new hires, provided orientation with company standards and safety expectations.</li>
    <li>Explained responsibilities and conducted closing announcements with co-workers.</li>
    <li>Managed cash register operations, including opening, closing, and security procedures.</li>
    <li>Provided customer service, assisted with stock inquiries and discounts.</li>
    <li>Resolved customer complaints and supported co-workers in delivering exemplary service.</li>
    <li>Facilitated returns and maintained accurate inventory.</li>
    <li>Restocked the floor, considering brand placement and product visibility.</li>
    <li>Gained experience in working within a closing store.</li>
  </ul>
</Experience>

<Experience>
  <h3>Burger Priest - Cashier / Food Handling</h3>
  <p>NOVEMBER 2018 - APRIL 2019</p>
  <ul>
    <li>Handled money transactions accurately, ensuring the validity of cash provided.</li>
    <li>Processed orders via phone, in-person, and through delivery apps (UberEats, Ritual, DoorDash, Skip the Dishes, Foodora, etc.).</li>
    <li>Provided customer service, handling complaints and resolving conflicts.</li>
    <li>Maintained a clean and welcoming restaurant environment.</li>
    <li>Prepared food in compliance with health and safety regulations.</li>
  </ul>
</Experience>

<Experience>
  <h3>Red Lobster - Host / Busser</h3>
  <p>DECEMBER 2018 - MARCH 2019</p>
  <ul>
    <li>Managed phone calls, answered customer inquiries, and took reservations.</li>
    <li>Updated restaurant seating arrangements using a tablet to improve customer flow.</li>
    <li>Greeted guests and seated them according to their preferences for the best dining experience.</li>
    <li>Maintained a clean and inviting dining space.</li>
  </ul>
</Experience>

<Experience>
  <h3>Sporting Life - Merchandiser</h3>
  <p>NOVEMBER 2018 - JANUARY 2019</p>
  <ul>
    <li>Organized and restocked products on the sales floor for optimal accessibility.</li>
    <li>Ensured product displays were visually appealing to customers.</li>
    <li>Provided detailed product knowledge to customers and sales associates.</li>
    <li>Used a warehouse database to track stock levels in-store and at other locations.</li>
  </ul>
</Experience>

<Experience>
  <h3>Lush - Manufacturing (Seasonal)</h3>
  <p>SEPTEMBER 2018 - DECEMBER 2018</p>
  <ul>
    <li>Worked with a team to produce and package high-demand cosmetic products.</li>
    <li>Assisted in shaping and designing bath products in the Bubbles department.</li>
    <li>Maintained a clean and safe workspace to meet production standards.</li>
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
        <p>SEPTEMBER 2020 - PRESENT</p>
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
