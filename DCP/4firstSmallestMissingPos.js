var firstMissingPositive = function (nums) {
  let arr = nums;
  let noOnes = true;
  let max = nums.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      noOnes = false;
    }
  }
  if (noOnes) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] === 0 || arr[i] > max + 1) {
      arr[i] = 1;
    }
  }

  for (let i = 0; i < max; i++) {
    arr[Math.abs(arr[i]) - 1] = Math.abs(arr[Math.abs(arr[i]) - 1]) * - 1;
  }

  for (let i = 0; i < max; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }

  return max + 1;
};