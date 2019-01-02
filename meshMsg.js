class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function bfsGetPath(graph, startNode, endNode) {

  if (!graph.hasOwnProperty(startNode)) {
    throw new Error('Start node not in graph!');
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error('End node not in graph!');
  }

  // Find the shortest route in the network between the two users
  const currQueue = new Queue();
  let current;
  let combos = {};
  combos[startNode] = null;
  currQueue.enqueue(startNode);

  const getPath = () => {
    let currNode = endNode;

    const path = [];
    while (currNode !== null) {
      path.push(currNode);
      currNode = combos[currNode];
    }

    return path.reverse();
  }

  while (current = currQueue.dequeue()) {
    if (current === endNode) {
      return getPath();
    }

    graph[current].forEach(neighbor => {
      if (!combos.hasOwnProperty(neighbor)) {
        combos[neighbor] = current;
        currQueue.enqueue(neighbor);
      }
    });
  }
  return null;
}
