class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

var validBT = (tree) => {
  const stack = [];
  stack.push({ tree, min: null, max: null });
  let current;

  while (current = stack.pop()) {
    const currTree = current.tree;
    if (current.min && currTree.value <= current.min) {
      return false;
    }

    if (current.max && currTree.value >= current.max) {
      return false;
    }

    if (currTree.left) {
      let max;
      if (!current.max || currTree.value < current.max) {
        max = currTree.value;
      } else {
        max = current.max;
      }
      stack.push({ tree: currTree.left, max, min: current.min });
    }

    if (currTree.right) {
      let min;
      if (!current.min || currTree.value > current.min) {
        min = currTree.value;
      } else {
        min = current.min;
      }
      stack.push({ tree: currTree.right, max: current.max, min });
    }
  }

  return true;
}