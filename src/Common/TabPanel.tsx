// src/Common/TabPanel.tsx
import React, { ReactNode } from 'react';
import { Box, Typography, Button, ButtonGroup, AppBar } from '@mui/material';

interface TabPanelProps {
    children?: ReactNode;
    value: number;
    onTabChange: (index: number) => void;
    tabs: { name: string }[];
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, onTabChange, tabs, ...other }) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} {...other}>
            <AppBar position="static" sx={{ padding: 2 }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    {tabs.map((tab, tabIndex) => (
                        <Button
                            key={tabIndex}
                            // debug outline
                            variant={value === tabIndex ? 'contained' : 'contained'}
                            style={value === tabIndex ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }}
                            onClick={() => onTabChange(tabIndex)}
                        >
                            {tab.name}
                        </Button>
                    ))}
                </ButtonGroup>
            </AppBar>
            <Box sx={{ p: 3 }}>
                {tabs.map((tab, index) => (
                    <div
                        role="tabpanel"
                        hidden={value !== index}
                        id={`simple-tabpanel-${index}`}
                        aria-labelledby={`simple-tab-${index}`}
                        key={index}
                    >
                        {value === index && (
                            <Typography>{childrenArray[index]}</Typography>
                        )}
                    </div>
                ))}
            </Box>
        </Box>
    );
};

export default TabPanel;
