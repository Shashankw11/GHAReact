import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './teamDetails.css'; // Import CSS file

const TeamDetails = ({ match }) => {
  const { member, fetchTeamMemberDetails } = useContext(ProjectContext);
  const memberId = match.params.id;

  useEffect(() => {
    fetchTeamMemberDetails(memberId);
  }, [memberId, fetchTeamMemberDetails]);

  return (
    <div className="team-details-container">
      <div className="team-details-content">
        <h1>Team Member Details</h1>
        <p>{member.name}</p>
        <p>{member.role}</p>
      </div>
    </div>
  );
};

export default TeamDetails;
