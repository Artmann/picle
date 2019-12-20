export default `
  .label {
    font-family: 'trebuchet ms', verdana, arial;
    font-family: var(--mermaid-font-family);
    color: #333;
  }

  .label text {
    fill: #333;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon {
    fill: #FFF;
    stroke: #7D8CB7;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: #EAEBF0;
  }

  .edgePath .path {
    stroke: #EAEBF0;
    stroke-width: 1.5px;
  }

  .edgeLabel {
    background-color: #ccdbf1;
    color: #5c5f6d;
    text-align: center;
  }

  .cluster rect {
    fill: red;
    stroke: red;
    stroke-width: 1px;
  }

  .cluster text {
    fill: red;
  }
`
