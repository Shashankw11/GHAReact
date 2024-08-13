import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import './riskList.css'; // Import CSS file

const RiskList = () => {
  const { risks, fetchRisks } = useContext(ProjectContext);

  useEffect(() => {
    fetchRisks();
  }, [fetchRisks]);

  return (
    <div className="risk-list-container">
      <div className="risk-list-content">
        <h1>Risk List</h1>
        <ul>
          {risks.map(risk => (
            <li key={risk.id}>{risk.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RiskList;
