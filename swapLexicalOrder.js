function swapLexOrder(str, pairs) {
  const relationships = {};
  const availableLetters = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    if (!relationships[pair[0]]) {
      relationships[pair[0]] = [pair[1]];
      availableLetters[pair[0]] = [str[pair[1]]];
    } else {
      relationships[pair[0]].push(pair[1]);
      availableLetters[pair[0]].push(str[pair[1]]);
    }

    if (!relationships[pair[1]]) {
      relationships[pair[1]] = [pair[0]];
      availableLetters[pair[1]] = [str[pair[0]]];
    } else {
      relationships[pair[1]].push(pair[0]);
      availableLetters[pair[1]].push(str[pair[0]]);
    }
  }

  Object.keys(availableLetters).forEach(element => {
    availableLetters[element].sort(sortLex);
  })

  for (let i = 0; i < str.length; i++) {
    if (availableLetters[i] !== undefined) {
      str[i] = availableLetters[i].pop();
      for (let j = 0; j < relationships[i].length; j++) {
        availableLetters[relationships[i][j]].pop();
      }
    }
  }

  return str;
}

const sortLex = (a, b) => {
  if (a < b) {
    return -1;
  } if (a > b) {
    return 1;
  }
  return 0;
}