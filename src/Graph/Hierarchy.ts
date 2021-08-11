import * as d3 from 'd3';

// hierarchy is a nested data structure representing a tree

// const width = 500;
const dx = 30;

const treeWidth = 300;
const treeHeight = 50;

export function drawGraph(svgRef: any, rootData: any) {
  const labelMaker = {
    nodes: (d: any) => d.data.name,
    links: (d: any) => `From ${d.source.data.name} to ${d.target.data.name}`,
  };

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

  // ????
  let x0 = Infinity;
  let x1 = -x0;
  root.each((d: any) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  // nodes and links group ???
  const g = svg
    .append('g')
    .attr('id', 'parentGroup')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .attr('transform', `translate(${marginLeft},${dx - x0})`);

  // set the path
  const linkSelection = g
    .append('g')
    .attr('id', 'linkGroup')
    .attr('fill', 'none')
    .attr('stroke', '#555')
    .attr('stroke-opacity', 0.4)
    .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(links)
    .join('path') // <- TODO read https://observablehq.com/@d3/selection-join
    .attr('d', treeLink)
    .attr('id', (d: any) => `${d.source.data.id}_${d.target.data.id}`);

  // set the label on the path
  const linkLabels = g
    .selectAll('.link_labels')
    .data(links)
    .join('text')
    .attr('transform', `translate(${marginLeft},${dx - x0})`)
    .attr('class', 'link_labels')
    .append('textPath')
    .attr('text-anchor', 'middle')
    .attr('startOffset', '50%')
    // the href of the textpath should be the id of the path
    .attr('href', (d: any) => `#${d.source.data.id}_${d.target.data.id}`)

    .text(labelMaker.links);

  const nodeSelection = g
    .append('g')
    .attr('id', 'nodeGroup')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-width', 3)
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  nodeSelection
    .append('circle')
    .attr('fill', (d: any) => 'red')
    .attr('r', 2.5);

  // connectNodesWithLinks (and label)

  nodeSelection
    .append('text')
    .attr('fill', (d: any) => 'red')
    .attr('dy', '0.31em')
    .attr('x', (d: any) => (d.children ? -6 : 6))
    .attr('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
    .text(labelMaker.nodes)
    .clone(true)
    .lower()
    .attr('stroke', 'white');

  return svg.node();
}
