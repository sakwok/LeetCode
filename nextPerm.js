var nextPermutation = function (nums) {
  let compareIndex = nums.length - 2;

  while (compareIndex >= 0 && nums[compareIndex] >= nums[compareIndex + 1]) {
    compareIndex -= 1;
  }

  if (compareIndex >= 0) {
    let nextBiggest = nums.length - 1;

    while (nextBiggest >= 0 && nums[nextBiggest] <= nums[compareIndex]) {
      nextBiggest -= 1;
    }

    const temp = nums[compareIndex];

    nums[compareIndex] = nums[nextBiggest];
    nums[nextBiggest] = temp;
  }

  let start = compareIndex + 1;
  let end = nums.length - 1;

  while (start < end) {
    const reverseTemp = nums[start];
    nums[start] = nums[end];
    nums[end] = reverseTemp;
    start += 1;
    end -= 1;
  }

  return nums;
};