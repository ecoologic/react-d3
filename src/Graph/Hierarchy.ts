import * as d3 from 'd3';
import { tree } from 'd3';

// hierarchy is a nested data structure representing a tree

// const width = 500;
const dx = 30;

export function graph(
  svgRef: any,
  rootData: any,
  { label = (d: any) => d.data.id, marginLeft = 40 } = {}
) {
  const root = d3.tree().nodeSize([130, 100])(d3.hierarchy(rootData));
  // root = tree(rootData);
  console.log(root.descendants(), root.links());
  let x0 = Infinity;
  let x1 = -x0;
  root.each((d: any) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  const treeLink: any = d3
    .linkHorizontal()
    .x((d: any) => d.y)
    .y((d: any) => d.x);

  const svg = d3.select(svgRef).style('overflow', 'visible');
  // .attr('viewBox', [0, 0, width, x1 - x0 + dx * 2])

  const g = svg
    .append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .attr('transform', `translate(${marginLeft},${dx - x0})`);

  const link = g
    .append('g')
    .attr('fill', 'none')
    .attr('stroke', '#555')
    .attr('stroke-opacity', 0.4)
    .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(root.links())
    .join('path')
    // .attr('stroke', (d: any) =>
    //   highlight(d.source) && highlight(d.target) ? 'red' : null
    // )
    // .attr('stroke-opacity', (d: any) =>
    //   highlight(d.source) && highlight(d.target) ? 1 : null
    // )
    .attr('d', treeLink);

  const node = g
    .append('g')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-width', 3)
    .selectAll('g')
    .data(root.descendants())
    .join('g')
    .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  node
    .append('circle')
    .attr('fill', (d: any) => 'red')
    .attr('r', 2.5);

  node
    .append('text')
    .attr('fill', (d: any) => 'red')
    .attr('dy', '0.31em')
    .attr('x', (d: any) => (d.children ? -6 : 6))
    .attr('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
    .text(label)
    .clone(true)
    .lower()
    .attr('stroke', 'white');

  return svg.node();
}
