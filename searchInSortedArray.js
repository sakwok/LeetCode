var search = function (nums, target) {
  let firstValue = nums[0];
  let beg = 0;
  let end = nums.length - 1;

  while (beg <= end) {
    let midPoint = Math.floor((beg + end) / 2)
    let midValue = nums[midPoint];

    if (target === midValue) {
      return midPoint;
    } else if (midValue >= firstValue) {
      if (target >= firstValue && target < midValue) {
        end = midPoint - 1;
      } else {
        beg = midPoint + 1;
      }
    } else {
      if (target >= firstValue || target < midValue) {
        end = midPoint - 1;
      } else {
        beg = midPoint + 1;
      }
    }
  }

  return -1;
};