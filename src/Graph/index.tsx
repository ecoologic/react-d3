import React from 'react';
import * as d3 from 'd3';

const graphId = 'theGraph';

const Graph = (): JSX.Element => {
  const graphRef = React.useRef(null);
  React.useEffect(() => {
    // d3.select(`#${graphId}`).style("color", "green");
    d3.select(`#${graphId}`)
      .selectAll('div')
      .data([1, 2, 3])
      .enter()
      .append('div')
      .text((data) => data);
  }, []);
  return (
    <div id={graphId} ref={graphRef} className="Graph rootEl">
      D3 here
    </div>
  );
};

export default Graph;
