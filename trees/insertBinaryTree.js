var insertIntoBST = function(root, val) {
  const helper = (currNode) => {
      if (currNode.val > val) {
          if (currNode.left === null) {
              currNode.left = new TreeNode(val);
          } else {
              helper(currNode.left);    
          }
      } else {
          if (currNode.right === null) {
              currNode.right = new TreeNode(val);
          } else {
              helper(currNode.right);   
          }
      }
      
  }
  helper(root);
  return root;
};