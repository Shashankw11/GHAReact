import React from 'react';
import TaskBoard from '../Task/TaskBoard';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamMemberDashboard = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Team Member DashBoard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link href="#clientinfo">Client Info</Nav.Link>
        <Nav.Link href="#projectinfo">Project Info</Nav.Link>
        <Nav.Link as={Link} to="/support">
            <Button variant="outline-primary">Support</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/">
            <Button variant="outline-primary">logout</Button>
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <TaskBoard />
    </div>
  );
};

export default TeamMemberDashboard;
