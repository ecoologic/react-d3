import * as d3 from 'd3';

// hierarchy is a nested data structure representing a tree

type TselectionId = 'parentGroup' | 'nodeGroup' | 'linkGroup';

const dx = 30;
const marginLeft = 40;
const treeWidth = 300;
const treeHeight = 50;

const linkIdMaker = (d: any) => `${d.source.data.id}-${d.target.data.id}`;
const labelMaker = {
  nodes: (d: any) => d.data.name,
  links: (d: any) => `From ${d.source.data.name} to ${d.target.data.name}`,
};

const styledSelection = (
  selectionId: TselectionId,
  selection: any,
  { x0 }: { x0: number }
) => {
  const result = selection.attr('id', selectionId);

  if (selectionId === 'parentGroup') {
    return result
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .attr('transform', `translate(${marginLeft},${dx - x0})`);
  } else if (selectionId === 'linkGroup') {
    return result;
  }
};

export function drawGraph(svgRef: any, rootData: any) {
  const svg = d3.select(svgRef).style('overflow', 'visible');

  // hierarchyRoot
  const root = d3.tree().nodeSize([treeHeight, treeWidth])(
    d3.hierarchy(rootData)
  );
  const nodes = root.descendants();
  const links = root.links();

  // Sizes and positions the graph in the vertical middle
  let x0 = Infinity;
  let x1 = -x0;
  root.each((d: any) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  // linksOrientation
  const treeLink: any = d3
    .linkHorizontal()
    .x((d: any) => d.y) // x = y; y = x
    .y((d: any) => d.x);
  // const treeLink: any = d3
  //   .linkVertical()
  //   .x((d: any) => d.x)
  //   .y((d: any) => d.y);

  // parentGroup
  const g = styledSelection('parentGroup', svg.append('g'), { x0 });

  const linkSelection = g
    .append('g') // <=
    .attr('id', 'linkGroup')
    .attr('fill', 'none')
    .attr('stroke', '#555')
    .attr('stroke-opacity', 0.4)
    .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(links)
    .join('path') // <- TODO read https://observablehq.com/@d3/selection-join
    .attr('d', treeLink)
    .attr('id', linkIdMaker);

  const linkLabels = g
    .selectAll('.link_label')
    .data(links)
    .join('text')
    .attr('class', 'link_label')
    .append('textPath') // <=
    .attr('text-anchor', 'middle')
    .attr('startOffset', '50%')
    // needed to connect link with its text
    .attr('href', (d: any) => `#${linkIdMaker(d)}`)
    .text(labelMaker.links);

  // Position the nodes
  const nodeSelection = g
    .append('g') // <=
    .attr('id', 'nodeGroup')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  // Style nodes
  nodeSelection
    .append('circle') // <=
    .attr('fill', (d: any) => 'green')
    .attr('r', 2.5);

  // Add node labels
  nodeSelection
    .append('text') // <=
    .attr('fill', (d: any) => 'blue')
    .attr('dy', '0.31em')
    .attr('x', (d: any) => (d.children ? -6 : 6))
    .attr('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
    .text(labelMaker.nodes)
    .clone(true)
    .lower()
    .attr('stroke', 'white');

  return svg.node();
}
