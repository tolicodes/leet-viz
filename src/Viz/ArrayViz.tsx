import React from 'react';
import styled from 'styled-components';

interface ArrayDisplayProps {
  nums: number[];
  highlightedIndices: number[];
}

const ArrayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

const NumberBox = styled.div<{highlighted: boolean}>`
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  background-color: ${({ highlighted }) => highlighted ? '#ffdd57' : 'transparent'};
  border-radius: 5px;
`;

const ArrayViz: React.FC<ArrayDisplayProps> = ({ nums, highlightedIndices }) => {
  return (
    <ArrayContainer>
      {nums.map((num, index) => (
        <NumberBox key={index} highlighted={highlightedIndices.includes(index)}>
          {num}
        </NumberBox>
      ))}
    </ArrayContainer>
  );
};

export default ArrayViz;
