var subsets = function (nums) {
  const resultsObject = {};
  const result = [[]];

  const helper = (candidates, currResult) => {
    if (candidates.length === 0) {
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      currResult.push(candidates[i]);
      let compressResult = currResult.slice().sort((a, b) => a - b).join();
      if (!resultsObject[compressResult]) {
        resultsObject[compressResult] = currResult.slice();
      }
      helper(candidates.slice(i + 1), currResult);
      currResult.pop();
    }
  }

  helper(nums, []);

  Object.keys(resultsObject).forEach(subset => {
    result.push(resultsObject[subset]);
  });

  return result;
};