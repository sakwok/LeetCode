class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var serialize = (tree) => {
  let result = '';
  const stack = [];
  stack.push(tree);
  let current;

  while (stack.length > 0) {
    current = stack.pop();
    if (current) {
      result += `${current.val} `;
      stack.push(current.right);
      stack.push(current.left);
    } else {
      result += '-1 ';
    }
  }
  return result.slice(0, result.length - 1);
}

var deserialize = (str) => {
  const stack = str.split(' ').reverse();
  let createdHead = false;
  let head;

  while (stack.length > 0) {
    current = stack.pop();
    if (current.val !== '-1') {
      if (createdHead) {
        head = new Node(current.val);

      } else {

      }
    }
  }

}


var deserialize = (str) => {
  const stack = str.split(' ').reverse();

  const helper = () => {
    let current = stack.pop();
    if (current && current !== '-1') {
      const currNode = new Node(current);
      currNode.left = helper();
      currNode.right = helper();
      return currNode;
    }
    return null;
  }
  return helper();
}