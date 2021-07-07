import React from 'react';
import * as d3 from 'd3';

const Graph = (): JSX.Element => {
  const graphRef = React.useRef(null);
  React.useEffect(() => {
    // d3.select(`#${graphId}`).style("color", "green");
    d3.select(`#nodeGroup`)
      .selectAll('circle')
      .data([1, 2, 3])
      .enter()
      .append('circle')
      .attr('cx', (n) => n * 10)
      .attr('cy', (n) => n * 10)
      .attr('r', 10);
  }, []);
  return (
    <div id="graphId" ref={graphRef} className="Graph">
      <svg xmlns="http://www.w3.org/2000/svg">
        <g id="nodeGroup" fill="white" stroke="green" strokeWidth="5"></g>
      </svg>
    </div>
  );
};

export default Graph;
