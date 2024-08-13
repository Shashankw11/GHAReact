import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CreateTask = () => {
    const [formData, setFormData] = useState({
        projectId: '',
        assignedTo: '',
        title: '',
        taskDescription: '',
        status: 'ToDo',
        taskStartDate: '',
        taskEndDate: ''
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
        alert('Task Created!');
        // Add redirection logic here if needed
        // Example:
        // window.location.href = 'member_dashboard.html';
    };

    return (
        <Container className="my-5">
            <h1>Create Task</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProjectId">
                    <Form.Label>Project ID:</Form.Label>
                    <Form.Control
                        type="number"
                        name="projectId"
                        value={formData.projectId}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formAssignedTo">
                    <Form.Label>Assigned To (User ID):</Form.Label>
                    <Form.Control
                        type="number"
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formTaskDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="taskDescription"
                        value={formData.taskDescription}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formStatus">
                    <Form.Label>Status:</Form.Label>
                    <Form.Control
                        as="select"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="ToDo">ToDo</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Testing">Testing</option>
                        <option value="In Review">In Review</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Integration">Integration</option>
                        <option value="Deployed">Deployed</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formTaskStartDate">
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="taskStartDate"
                        value={formData.taskStartDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formTaskEndDate">
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="taskEndDate"
                        value={formData.taskEndDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Task
                </Button>
            </Form>
        </Container>
    );
};

export default CreateTask;
