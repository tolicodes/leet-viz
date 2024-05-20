// src/Problems/WordSearch/WordSearch2.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import TabPanel from '../../Common/TabPanel';
import ResultDisplay from '../../Common/ResultDisplay';
import GridVisualization from '../../Viz/Grid'; // Example visualization component
import TrieVisualization from '../../Viz/TrieTree'; // Example visualization component
import useWordSearchResults from './useWordSearchResults';

const WordSearch2: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const results = useWordSearchResults();

    const tabNames = results.map((result) => ({
        name: result.name,
    }));

    const handleTabChange = (index: number) => {
        setTabValue(index);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabPanel
                value={tabValue}
                onTabChange={handleTabChange}
                tabs={tabNames}
            >
                {results.map((result, index) => (
                    <ResultDisplay
                        key={index}
                        name={result.name}
                        words={result.words}
                        output={result.output}
                        result={result.result}
                        isSuccess={result.isSuccess}
                        Visualization={() => (
                            <div>
                                <GridVisualization grid={result.board} />
                                <TrieVisualization trie={result.trie} />
                            </div>
                        )}
                    />
                ))}
            </TabPanel>
        </Box>
    );
};

export default WordSearch2;
