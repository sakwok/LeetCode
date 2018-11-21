var letterCombinations = function(digits) {
  if (digits.length === 0) {
      return [];
  }
  let results = [];
  let combos = '';
  let remainDigits = digits;
  let numPad = {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: 'ghi'.split(''),
      5: 'jkl'.split(''),
      6: 'mno'.split(''),
      7: 'pqrs'.split(''),
      8: 'tuv'.split(''),
      9: 'wxyz'.split('')
  }
  
  const recurseCombo = (combos, digits) => {
      if (digits.length === 0) {
          results.push(combos);
          return;
      }
      
      const correLetters = numPad[digits[0]];
      
      for (let i = 0; i < correLetters.length; i++) {
          combos += correLetters[i];
          recurseCombo(combos, digits.substring(1, digits.length));
          combos = combos.substring(0, combos.length - 1);
      }
  }
  recurseCombo(combos, remainDigits);
  return results;
};