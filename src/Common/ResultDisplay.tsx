// src/Components/ResultDisplay.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

interface ResultDisplayProps {
    name: string;
    words: string[];
    output: string[];
    result: string[];
    isSuccess: boolean;
    Visualization: React.ComponentType;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ name, words, output, result, isSuccess, Visualization }) => {
    return (
        <Box sx={{ marginBottom: '20px', padding: '20px', backgroundColor: isSuccess ? '#e8f5e9' : '#ffebee', borderRadius: '8px' }}>
            <Typography variant="h5" component="div" gutterBottom>
                {name}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Category</strong></TableCell>
                            <TableCell><strong>Details</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Words</TableCell>
                            <TableCell>{words.join(', ')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Expected Output</TableCell>
                            <TableCell>{output.join(', ')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Actual Result</TableCell>
                            <TableCell>{result.join(', ')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell>
                                <Typography variant="body1" component="span" sx={{ color: isSuccess ? 'green' : 'red' }}>
                                    {isSuccess ? 'Success' : 'Fail'}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ marginTop: '20px' }}>
                <Visualization />
            </Box>
        </Box>
    );
};

export default ResultDisplay;
