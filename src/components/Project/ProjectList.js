import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './projectList.css'; // Import CSS file

const ProjectList = () => {
  const { projects, fetchProjects } = useContext(ProjectContext);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div className="project-list-container">
      <div className="project-list-content">
        <h1>Project List</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
