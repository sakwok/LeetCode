/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  
  nums.sort( (a,b) => a - b );
  
  for (let i = 0; i < nums.length - 2; i++) {
      let indexValue = nums[i];
      
      if (indexValue !== nums[i - 1]) {
          let start = i + 1;
          let end = nums.length - 1;

          while (start < end) {
              let startValue = nums[start];
              let endValue = nums[end];
              let tempTotal = indexValue + startValue + endValue;

              if (tempTotal === 0) {
                  result.push([indexValue, startValue, endValue]);
                  
                  while (start < end && nums[start] === nums[start + 1]) {
                      start += 1;
                  }
                  
                  while (start < end && nums[end] === nums[end - 1]) {
                      end -= 1;
                  }
                  start += 1;
                  end -= 1;
              }

              if (tempTotal > 0) {
                  end -= 1;   
              }

              if (tempTotal < 0) {
                  start += 1;
              }
          }
      }
  }
  
  return result;
};