import React, { FC } from 'react';
// import * as d3 from 'd3';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../utils/useStyles';

export interface INode {
  id: number;
  index: number;
}

interface IGraphProps {
  nodes: INode[];
}

// https://www.d3indepth.com/selections/
// const Graph = ({ nodes }: IGraphProps): JSX.Element => {
const Graph: FC<IGraphProps> = ({ nodes }) => {
  const classes = useStyles();
  const graphRef = React.useRef(null);
  React.useEffect(() => {
    // d3.select(`#nodeGroup`)
    //   .selectAll('circle')
    //   .data(nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', (d) => d.index * 10)
    //   .attr('cy', (d) => d.index * 10)
    //   .attr('r', 10);
  }, [nodes]);
  return (
    <Box>
      <Box className={classes.bordered}>
        <div id="graphId" ref={graphRef} className="Graph">
          <svg xmlns="http://www.w3.org/2000/svg" className="wh-full">
            <g id="nodeGroup" fill="white" stroke="green" strokeWidth="5"></g>
          </svg>
          D3 DISABLED
        </div>
      </Box>
      <Typography color={'primary'}>{JSON.stringify(nodes)}</Typography>
    </Box>
  );
};

export default Graph;

// d3.forceSimulation()
//   .force('charge', d3.forceManyBody())
//   .force('x', d3.forceX())
//   .force('y', d3.forceY())
//   .nodes(nodes);
// const nodes = [
//   { id: 1, index: 1 },
//   { id: 2, index: 2 },
//   { id: 3, index: 3 },
// ];
