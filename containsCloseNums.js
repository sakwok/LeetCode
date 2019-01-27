function containsCloseNums(nums, k) {
  const repeats = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof repeats[nums[i]] === undefined) {
      repeats[nums[i]] = i;
    } else {
      if (Math.abs(repeats[nums[i]] - i) <= k) {
        return true;
      }
      repeats[nums[i]] = i;
    }
  }

  return false;
}
