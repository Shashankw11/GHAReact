import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './riskDetails.css'; // Import CSS file

const RiskDetails = ({ match }) => {
  const { risk, fetchRiskDetails } = useContext(ProjectContext);
  const riskId = match.params.id;

  useEffect(() => {
    fetchRiskDetails(riskId);
  }, [riskId, fetchRiskDetails]);

  return (
    <div className="risk-details-container">
      <div className="risk-details-content">
        <h1>Risk Details</h1>
        <p>{risk.name}</p>
        <p>{risk.description}</p>
      </div>
    </div>
  );
};

export default RiskDetails;
