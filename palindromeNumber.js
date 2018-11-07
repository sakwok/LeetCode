var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }
  
  let og = x
  let result = 0;
  let divisible = 0;
  while (og !== 0) {
      divisible = Math.floor(og / 10);
      result = divisible ? result * 10 + (og % (divisible * 10)) : result * 10 + (og % (10));
      og = divisible;
  }
  
  return result === x;
};