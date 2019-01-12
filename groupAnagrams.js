var groupAnagrams = function (strs) {
  const strCheck = {};
  for (let i = 0; i < strs.length; i++) {
    const letters = strs[i].split('');
    letters.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });

    const exactOrder = letters.join('');

    if (!strCheck[exactOrder]) {
      strCheck[exactOrder] = [strs[i]];
    } else {
      strCheck[exactOrder].push(strs[i]);
    }
  }

  const result = [];

  for (keys in strCheck) {
    result.push(strCheck[keys]);
  }

  return result;
};