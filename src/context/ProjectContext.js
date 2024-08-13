import React, { createContext, useState } from 'react';
import projectService from '../services/projectService';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [risks, setRisks] = useState([]);
  const [risk, setRisk] = useState(null);
  const [team, setTeam] = useState([]);
  const [member, setMember] = useState(null);

  const fetchProjects = async () => {
    const response = await projectService.getProjects();
    setProjects(response);
  };

  const fetchProjectDetails = async (id) => {
    const response = await projectService.getProjectById(id);
    setProject(response);
  };

  const fetchRisks = async () => {
    const response = await projectService.getRisks();
    setRisks(response);
  };

  const fetchRiskDetails = async (id) => {
    const response = await projectService.getRiskById(id);
    setRisk(response);
  };

  const fetchTeam = async () => {
    const response = await projectService.getTeam();
    setTeam(response);
  };

  const fetchTeamMemberDetails = async (id) => {
    const response = await projectService.getTeamMemberById(id);
    setMember(response);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        project,
        risks,
        risk,
        team,
        member,
        fetchProjects,
        fetchProjectDetails,
        fetchRisks,
        fetchRiskDetails,
        fetchTeam,
        fetchTeamMemberDetails,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;