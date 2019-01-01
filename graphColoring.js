class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];

var colorGraph = (graph, colors) => {
  graph.forEach(node => {
    const invalidColors = [];
    node.neighbors.forEach(neighbor => {
      if (neighbor === node) {
        return false;
      }
      if (neighbor.color) {
        invalidColors.push(neighbor.color);
      }
    });

    colors.forEach(color => {
      if (!invalidColors.has(color)) {
        node.color = color;
        break;
      }
    })
  });
}