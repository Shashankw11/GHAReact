import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './projectDetails.css'; // Import CSS file

const ProjectDetails = ({ match }) => {
  const { project, fetchProjectDetails } = useContext(ProjectContext);
  const projectId = match.params.id;

  useEffect(() => {
    fetchProjectDetails(projectId);
  }, [projectId, fetchProjectDetails]);

  return (
    <div className="project-details-container">
      <div className="project-details-content">
        <h1>Project Details</h1>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
