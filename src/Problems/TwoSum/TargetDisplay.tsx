import React from 'react';
import styled from 'styled-components';

interface TargetDisplayProps {
  target: number;
}

const TargetContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px;
  font-size: 1.5em;
`;

const TargetDisplay: React.FC<TargetDisplayProps> = ({ target }) => {
  return (
    <TargetContainer>
      <h2>Target: {target}</h2>
    </TargetContainer>
  );
};

export default TargetDisplay;
