import React, { useEffect, useState } from 'react';
import TargetDisplay from './TargetDisplay';
import Result from './Result';
import InteractionController from './InteractionController';
import MapViz from '../../Viz/MapViz';
import ArrayViz from '../../Viz/ArrayViz';
import CodeDisplay from '../../Common/CodeDisplay';

const NUMS = [2, 7, 11, 15];
const TARGET = 9;

const WordSearch: React.FC = () => {
  const [nums, setNums] = useState<number[]>(NUMS);
  const [target, setTarget] = useState<number>(TARGET);
  const [resultIndices, setResultIndices] = useState<number[]>([]);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const [mapState, setMapState] = useState<Map<number, number>>(new Map());
  const [currentLine, setCurrentLine] = useState<number>();

  const code = `const numMap = new Map<number, number>();
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (numMap.has(complement)) {
    setResultIndices([numMap.get(complement), i]);
    return;
  }
  numMap.set(nums[i], i);
}`;

  return (
    <div>
      <TargetDisplay target={target} />
      <ArrayViz nums={nums} highlightedIndices={highlightedIndices} />
      <InteractionController
        nums={nums}
        target={target}
        setHighlightedIndices={setHighlightedIndices}
        setResultIndices={setResultIndices}
        setMapState={setMapState}
      setCurrentLine={setCurrentLine}
      />
      <Result resultIndices={resultIndices} />
      <MapViz map={mapState} />
      <CodeDisplay code={code} highlightLine={currentLine} />
    </div>
  );
};

export default WordSearch;
