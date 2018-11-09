var maxArea = function(height) {
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  let result = 0;
  
  while (pointer1 < pointer2) {
      let width = pointer2 - pointer1;
      let tall = height[pointer2] >= height[pointer1] ? height[pointer1] : height[pointer2];
      let volume = width * tall;
      if (volume > result) {
          result = volume;
      }
      
      if (height[pointer1] > height[pointer2]) {
          pointer2--;
      } else if (height[pointer1] < height[pointer2]) {
          pointer1++;
      } else if (height[pointer1] === height[pointer2]) {
          pointer1++
          pointer2--;
      }
  }
  return result;
};