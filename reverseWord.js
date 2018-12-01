var reverseWords = (words) => {
  var reverseLetters = (letters, start, end) => {
    while (start < end) {
      let holder = letters[start];
      letters[start] = letters[end];
      letters[end] = letters[start];
      start++;
      end--;
    }
    return letters;
  }
  words = reverseLetters(words, 0, words.length - 1);

  let lastSpace = -1;
  for (let i = 0; i <= words.length; i++) {
    if (i === words.length || words[i] === ' ') {
      reverseLetters(words, lastSpace + 1, i - 1);
      lastSpace = i;
    }
  }
  return words;
};