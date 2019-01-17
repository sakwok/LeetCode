var canJump = function (nums) {
  if (nums.length <= 1) {
    return true;
  }

  const zeroIndex = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      zeroIndex[i] = false;
    }
  }

  Object.keys(zeroIndex).forEach(index => {
    const intIndex = parseInt(index);
    for (let j = 0; j < intIndex; j += 1) {
      if (nums[j] > intIndex - j || nums[j] + j >= nums.length - 1) {
        zeroIndex[index] = true;
      }
    }
  });

  for (indexes in zeroIndex) {
    if (!zeroIndex[indexes]) {
      return false;
    }
  }

  return true;

};