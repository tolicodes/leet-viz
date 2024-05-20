import React, { useState } from 'react';

interface InteractionControllerProps {
    nums: number[];
    target: number;
    setHighlightedIndices: (indices: number[]) => void;
    setResultIndices: (indices: number[]) => void;
    setMapState: (map: Map<number, number>) => void;  // New prop to update the map state
    setCurrentLine: (line: number) => void
}



const InteractionController: React.FC<InteractionControllerProps> = ({ nums, target, setHighlightedIndices, setResultIndices, setMapState, setCurrentLine }) => {
    const awaitAndSetLine = async (line: number) => {
        await new Promise(resolve => setTimeout(resolve, 500)); // Delay for visualization
        setCurrentLine(line);
    }

    const animateFindTwoSum = async () => {
        await awaitAndSetLine(1);
        const numMap = new Map<number, number>();

        await awaitAndSetLine(2);
        for (let i = 0; i < nums.length; i++) {
            setHighlightedIndices([i]);
            
            await awaitAndSetLine(3)
            const complement = target - nums[i];
            
            await awaitAndSetLine(4);
            if (numMap.has(complement)) {
                await setCurrentLine(5);
                setResultIndices([numMap.get(complement)!, i]);
                setHighlightedIndices([numMap.get(complement)!, i]);
                
                setMapState(new Map(numMap)); // Update the visual map display

                await setCurrentLine(6);
                return;
            }

            await setCurrentLine(8);
            numMap.set(nums[i], i);

            setMapState(new Map(numMap)); // Update the visual map display
        }

        await setCurrentLine(10);
        setResultIndices([]);
        setHighlightedIndices([]); // Clear highlights
        
        await setCurrentLine(11);
        setMapState(new Map()); // Clear the map display
    };

    return (
        <button onClick={animateFindTwoSum}>Animate Two Sum Search</button>
    );
};

export default InteractionController;  