import React from 'react';
import './Homepage.css';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Rev Task Management
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">User Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Project Status</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Create Project</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Create Task</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Clients" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.4">Amazon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Flipkart</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Tech Mahindra</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Infosys</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/support">
            <Button variant="outline-primary">Support</Button>
        </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <Button variant="outline-secondary">Sign In</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            <Button variant="success">Sign Up</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomePage;
