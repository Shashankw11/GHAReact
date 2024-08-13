import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './teamList.css'; // Import CSS file

const TeamList = () => {
  const { team, fetchTeam } = useContext(ProjectContext);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return (
    <div className="team-list-container">
      <div className="team-list-content">
        <h1>Team List</h1>
        <ul>
          {team.map(member => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamList;
