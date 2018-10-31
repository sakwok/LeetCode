var lengthOfLongestSubstring = function(s) {
  let map = {};
  let beginning = 0;
  let max = 0;
  
  for (let i = 0; i <= s.length - 1; i++) {
      if (beginning <= map[s[i]]) {
          beginning = map[s[i]] + 1;
          map[s[i]] = i;
          
      } else {
          map[s[i]] = i;
          max = Math.max(max, i + 1 - beginning);
      }
  }
  return max;
};