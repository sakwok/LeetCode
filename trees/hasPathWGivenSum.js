//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  let path = false;
 
  const helper = (tree, count = 0) => {
      count += tree.value;
      if (count === s && !tree.left && !tree.right) {
          path = true;
          return;
      }
      
      if (tree.left) {
          helper(tree.left, count);
      }
      
      if (tree.right) {
          helper(tree.right, count);
      }
  }
  if (t) {
      helper(t);    
  }
  
  return path;
}


