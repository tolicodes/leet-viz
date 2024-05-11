import React from 'react';
import styled from 'styled-components';

interface MapVizProps {
  map: Map<number, number>;
}

const MapContainer = styled.div`
  padding: 20px;
  margin-top: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: monospace;
  white-space: pre-wrap; // Ensures formatting is preserved
`;

const MapViz: React.FC<MapVizProps> = ({ map }) => {
  const mapToJson = (map: Map<number, number>) => {
    const obj = Object.fromEntries(map);
    return JSON.stringify(obj, null, 2); // Pretty print the JSON
  };

  return (
    <MapContainer>
      {mapToJson(map)}
    </MapContainer>
  );
};

export default MapViz;
