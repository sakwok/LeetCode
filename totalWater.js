var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let lBorder = height[left];
  let rBorder = height[right];
  let totalWater = 0;
  
  while (left < right) {
      if (lBorder <= rBorder) {
          left++;
          if (lBorder <= height[left]) {
              lBorder = height[left];
          } else {
              totalWater += lBorder - height[left];
          }
      } else {
          right--;
          if (rBorder <= height[right]) {
              rBorder = height[right];
          } else {
              totalWater += rBorder - height[right];
          }
      }
  }
  
  return totalWater;
};