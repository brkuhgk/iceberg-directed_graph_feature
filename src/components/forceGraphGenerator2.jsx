import * as d3 from "d3";

export function runForceGraph({
  container,
  linksData,
  nodesData,
  nodeHoverTooltip,
}) {
  const links = linksData.map((d) => Object.assign({}, d));
  const nodes = nodesData.map((d) => Object.assign({}, d));

  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  const width = containerRect.width;

  const simulation = d3.forceSimulation()
                    .force("charge", d3.forceManyBody())
                    .force("link", d3.forceLink().id(d => d.id))
                    .force("x", d3.forceX())
                    .force("y", d3.forceY())
                    .on("tick", ticked)

}
