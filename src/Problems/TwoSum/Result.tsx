import React from 'react';
import styled from 'styled-components';

interface ResultDisplayProps {
  resultIndices: number[];
}

const ResultContainer = styled.div`
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 1.2em;
`;

const Result: React.FC<ResultDisplayProps> = ({ resultIndices }) => {
  return (
    <ResultContainer>
      Result Indices: {resultIndices.length > 0 ? resultIndices.join(' & ') : 'No solution found'}
    </ResultContainer>
  );
};

export default Result;
