import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "black" }} sticky="top">
        <Container>
          <Navbar.Brand href="#home" className='text-warning fw-bold fs-4'>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="./Banner.jsx" className='text-warning fs-5 mx-3'>Home</Nav.Link>
              <Nav.Link href="./Skills.jsx" className='text-warning fs-5 mx-3'>Skills</Nav.Link>
              <Nav.Link href="#projects" className='text-warning fs-5 mx-3'>Projects</Nav.Link>
              <Nav.Link href="#contact" className='text-warning fs-5 mx-3'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
