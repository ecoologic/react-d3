import React, { FC } from 'react';
import * as d3 from 'd3';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../utils/useStyles';
import { drawGraph } from './Hierarchy';

export interface INode {
  id: number;
  index: number;
}

interface IGraphProps {
  nodes: INode[];
}

const root = {
  name: 'root',
  id: 'root',
  children: [
    { name: 'child #1', id: 'c1' },
    {
      name: 'child #2',
      id: 'c2',
      children: [
        { name: 'grandchild #1', id: 'gc1' },
        { name: 'grandchild #2', id: 'gc2' },
        { name: 'grandchild #3', id: 'gc3' },
      ],
    },
  ],
};

// arrays = d3.hierarchy([
//   [
//     "leaf #1",
//     [
//       "leaf #2",
//       "leaf #3",
//       "leaf #4"
//     ]
//   ]
// ], d => Array.isArray(d) ? d : undefined)

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

  React.useEffect(() => {
    // d3.select(`#nodeGroup`)
    //   .selectAll('circle')
    //   .data(nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', (d) => d.index * 10)
    //   .attr('cy', (d) => d.index * 10)
    //   .attr('r', 10);
    drawGraph(graphRef.current, root);
  }, []);

  return (
    <Box>
      <Box className={classes.bordered}>
        <div id="graphId" className="Graph">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            ref={graphRef}
            className="wh-full"
          ></svg>
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
