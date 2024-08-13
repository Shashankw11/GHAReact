import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ProjectManagerDashboard from './components/Dashboard/ProjectManagerDashboard';
import TeamMemberDashboard from './components/Dashboard/TeamMemberDashboard';
import ClientDashboard from './components/Dashboard/ClientDashboard';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProject from './components/Features/CreateProject';
import CreateTask from './components/Features/CreateTask';
import SupportPage from './components/SupportPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/project-manager" element={<ProjectManagerDashboard />} />
        <Route path="/team-member" element={<TeamMemberDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/create-projects" element={<CreateProject />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </div>
  );
}

export default App;
