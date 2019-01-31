/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const helper = (remainingIndex, currChars, sum) => {
    for (let i = remainingIndex; i < candidates.length; i++) {
      if ((candidates[i] === candidates[i - 1] && i - 1 < remainingIndex) || candidates[i] !== candidates[i - 1]) {
        let currSum = sum + candidates[i];
        if (currSum === target) {
          result.push([candidates[i], ...currChars]);
          return
        } else if (currSum < target) {
          helper(i + 1, [candidates[i], ...currChars], currSum);
        }
      }
    }
  }
  helper(0, [], 0);
  return result;
};