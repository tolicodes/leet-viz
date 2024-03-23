import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Define types for the props
interface GridProps {
  grid: string[][];
}

const Grid: React.FC<GridProps> = ({ grid }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return; // Ensure the ref is current
    
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear the SVG to redraw
    
    const cellSize = 50;
    const rows = grid.length;
    const cols = grid[0].length;
    
    svg.attr('width', cols * cellSize)
       .attr('height', rows * cellSize);
    
    // Draw cells
    svg.selectAll("rect")
      .data(grid.flat())
      .enter().append("rect")
      .attr('x', (d, i) => (i % cols) * cellSize)
      .attr('y', (d, i) => Math.floor(i / cols) * cellSize)
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('stroke', 'black')
      .attr('fill', 'white');

    // Add letters
    svg.selectAll("text")
      .data(grid.flat())
      .enter().append("text")
      .attr('x', (d, i) => (i % cols) * cellSize + cellSize / 2)
      .attr('y', (d, i) => Math.floor(i / cols) * cellSize + cellSize / 2)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .text(d => d);
  }, [grid]); // Rerender when grid changes

  return <svg ref={ref}></svg>;
};

export default Grid;
