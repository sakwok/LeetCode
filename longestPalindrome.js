var longestPalindrome = function(s) {
    let currStr = '';
    let result = '';
    for (let i = 0; i < s.length; i++) {
        currStr = s[i];
        const helper = (i1, i2, i3) => {
            if (s[i1] && s[i2] && s[i1] === s[i2]) {
                currStr = s[i1] + currStr + s[i2];
                if (currStr.length > result.length) {
                    result = currStr;
                }
                helper(i1-1, i2+1);
            }
        }
        helper(i - 1, i + 1);
        currStr = '';
        helper(i, i+1);
    }
      if (!result && s.length > 0) {
          return s[0];
      }
      return result;
  };