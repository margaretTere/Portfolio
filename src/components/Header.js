import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </Nav>
);

export default Header;

const Nav = styled.nav`
  background: #333;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
`;