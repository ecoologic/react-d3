import React from 'react';
import * as d3 from 'd3';
import { SimulationNodeDatum } from 'd3';

const nodes = [
  { id: 1, index: 1 },
  { id: 2, index: 2 },
  { id: 3, index: 3 },
];

// https://www.d3indepth.com/selections/
const Graph = (): JSX.Element => {
  const graphRef = React.useRef(null);
  React.useEffect(() => {
    d3.select(`#nodeGroup`)
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.index * 10)
      .attr('cy', (d) => d.index * 10)
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

// d3.forceSimulation()
//   .force('charge', d3.forceManyBody())
//   .force('x', d3.forceX())
//   .force('y', d3.forceY())
//   .nodes(nodes);
