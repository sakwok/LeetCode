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

var findLargest = (bst) => {
  let largest;
  current = bst;
  while (current) {
    largest = bst.value;
    current = current.right;
  }

  return largest;
}

var secLargest = (bst) => {
  let current = bst;

  while (current) {
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.right && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}