class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var univalTree = (tree) => {
  let counter = 0;

  const helper = (tree, val) => {
    const currentVal = tree.val;

    if (tree.left === null && tree.right === null) {
      counter += 1;
      if (currentVal === val) {
        return true;
      } else {
        return false;
      }
    }

    const left = tree.left ? helper(tree.left, currentVal) : true;
    const right = tree.right ? helper(tree.right, currentVal) : true;

    if (left && right) {
      counter += 1;
      if (currentVal === val) {
        return true;
      }
    }

    return false;

  }
  helper(tree, tree.val);
  return counter;
}

const root = new Node(0);
root.left = new Node(1);
root.right = new Node(0);
root.right.left = new Node(1);
root.right.right = new Node(0);
root.right.left.left = new Node(1);
root.right.left.right = new Node(1);

// const root = new Node(5);
// root.left = new Node(4);
// root.right = new Node(5);
// root.left.left = new Node(4);
// root.left.right = new Node(4);
// root.right.right = new Node(5);

univalTree(root);