// src/components/ProjectManagerDashboard.js
import React from 'react';
import { Navbar, Nav, Button, Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Project Alpha',
    description: 'A project to develop a new feature for our app.',
    manager: 'John Doe',
    endDate: '2024-12-31'
  },
  {
    name: 'Project Beta',
    description: 'Improving the user interface for the platform.',
    manager: 'Jane Smith',
    endDate: '2024-12-20'
  },
  {
    name: 'Project Gama',
    description: 'Improve css.',
    manager: 'John Smith',
    endDate: '2024-10-28'
  },
  {
    name: 'Project Lambda',
    description: 'Improving the user interface for the platform.',
    manager: 'kenny',
    endDate: '2024-11-30'
  },
];

const ProjectManagerDashboard = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Project Manager Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/create-task">Create Task</Nav.Link>
            <Nav.Link as={Link} to="/remove-team-member">Remove Team Member</Nav.Link>
            <Nav.Link as={Link} to="/update-project-status">Update Project Status</Nav.Link>
            <Nav.Link as={Link} to="/client-information">Client Information</Nav.Link>
            <Nav.Link as={Link} to="/support">
            <Button variant="outline-primary">Support</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/">
            <Button variant="outline-primary">logout</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-4">
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Project Manager: {project.manager}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Footer className="text-muted">End Date: {project.endDate}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectManagerDashboard;
