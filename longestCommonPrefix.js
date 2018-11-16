var longestCommonPrefix = function(strs) {
    let longest = strs[0] ? strs[0] : '';
    
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < longest.length; j++) {
            if (longest[j] !== strs[i][j]) {
                longest = longest.substring(0, j);
            }
        }
    }
    return longest;
};