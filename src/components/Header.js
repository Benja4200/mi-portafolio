// Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" fixed="top" collapseOnSelect>
      <Navbar.Brand href="#home"> Benjamin Tagle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Sobre Mí</Nav.Link>
          <Nav.Link href="#skills">Conocimientos</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
        <Button onClick={toggleDarkMode} className="ml-2">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
