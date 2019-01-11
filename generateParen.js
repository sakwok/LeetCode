/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const helper = (numParens, currStr, stack) => {
    if (numParens === 0) {
      while (stack.length > 0) {
        currStr += ')';
        stack.pop();
      }
      result.push(currStr);
      return;
    }

    if (stack.length === 0) {
      currStr += '(';
      numParens -= 1;
      stack.push('(');
      helper(numParens, currStr, stack);
    } else {
      let currStr1 = currStr;
      let numParens1 = numParens;
      let stack1 = stack.slice();
      currStr1 += '(';
      numParens1 -= 1;
      stack1.push('(');
      helper(numParens1, currStr1, stack1);

      let currStr2 = currStr;
      let numParens2 = numParens;
      let stack2 = stack.slice();
      stack2.pop();
      currStr2 += ')';
      helper(numParens2, currStr2, stack2);
    }

  }

  helper(n, '', []);

  return result;
};