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

var balanceBinaryTree = (tree) => {
  const stack = [];
  stack.push({ tree, depth: 0 });
  const depths = [];
  let current;

  while (current = stack.pop()) {
    const currTree = current.tree;
    if (!currTree.left && !currTree.right) {
      if (depths.indexOf(current.depth) < 0) {
        depths.push(current.depth);
      }

      if (Math.abs(depths[0] - depths[1]) > 1 || depths.length > 2) {
        return false;
      }
    } else {
      if (currTree.left) {
        depths.push({ tree: currTree.left, depth: current.depth + 1 });
      }
      if (currTree.right) {
        depths.push({ tree: currTree.right, depth: current.depth + 1 });
      }
    }
  }

  return true;
}

