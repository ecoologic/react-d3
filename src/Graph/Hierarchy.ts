import * as d3 from 'd3';

// hierarchy is a nested data structure representing a tree

// const width = 500;
const dx = 30;

const treeWidth = 300;
const treeHeight = 50;

export function drawGraph(svgRef: any, rootData: any) {
  const svg = d3.select(svgRef).style('overflow', 'visible');
  const marginLeft = 40;

  // hierarchyRoot
  const root = d3.tree().nodeSize([treeHeight, treeWidth])(
    d3.hierarchy(rootData)
  );
  const nodes = root.descendants();
  const links = root.links();

  // linksOrientation
  const treeLink: any = d3
    .linkHorizontal()
    .x((d: any) => d.y)
    .y((d: any) => d.x);
  // const treeLink: any = d3
  //   .linkVertical()
  //   .x((d: any) => d.x)
  //   .y((d: any) => d.y);

  // label position ??
  let x0 = Infinity;
  let x1 = -x0;
  root.each((d: any) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  const g = svg
    .append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .attr('transform', `translate(${marginLeft},${dx - x0})`);

  //
  const link = g
    .append('g')
    .attr('fill', 'none')
    .attr('stroke', '#555')
    .attr('stroke-opacity', 0.4)
    .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(links)
    .join('path') // <-
    .attr('d', treeLink);

  const node = g
    .append('g')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-width', 3)
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  node
    .append('circle')
    .attr('fill', (d: any) => 'red')
    .attr('r', 2.5);

  // connectNodesWithLinks (and label)
  const label = (d: any) => {
    return d.data.name;
  };

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
