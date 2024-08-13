import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

const CreateProject = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        clientName: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Project Created!');
        // Add your authentication and redirection logic here
        // Example:
        // if (storedUser && storedUser.username === username && storedUser.password === password) {
        //     const userRole = storedUser.role;
        //     if (userRole === 'manager') {
        //         window.location.href = 'createtasks.html';
        //     } else {
        //         window.location.href = 'dashboard.html';
        //     }
        // }
    };

    return (
        <Container className="my-5">
            <h1>Create Project</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProjectName">
                    <Form.Label>Project Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formClientName">
                    <Form.Label>Client Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formStartDate">
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEndDate">
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Project
                </Button>
            </Form>
        </Container>
    );
};

export default CreateProject;
