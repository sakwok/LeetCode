/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const helper = (remainingIndex, currChars, sum) => {
    for (let i = remainingIndex; i < candidates.length; i++) {
      let currSum = sum + candidates[i];
      if (currSum === target) {
        result.push([candidates[i], ...currChars]);
        return
      } else if (currSum < target) {
        helper(i, [candidates[i], ...currChars], currSum);
      }
    }
  }
  helper(0, [], 0);
  return result;
};