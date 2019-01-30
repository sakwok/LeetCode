/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let begIndex = 0;
  let midIndex = 0;
  let endIndex = nums.length - 1;

  while (midIndex <= endIndex) {
    if (nums[midIndex] === 0) {
      nums[midIndex] = nums[begIndex]
      nums[begIndex] = 0;
      begIndex++;
      midIndex++;
    } else if (nums[midIndex] === 1) {
      midIndex++;
    } else {
      let temp = nums[endIndex];
      nums[endIndex] = nums[midIndex];
      nums[midIndex] = temp;
      endIndex--;
    }
  }
};