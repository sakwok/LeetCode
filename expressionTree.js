class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const expressionTree = (tree) => {
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  if (Number.isInteger(tree.value)) {
    return tree.value;
  } else {
    const operation = operations[tree.value];
    return operation(expressionTree(tree.left), expressionTree(tree.right));
  }
}