function swapLexOrder(str, pairs) {
  const relationships = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    if (!relationships[pair[0]]) {
      relationships[pair[0]] = [pair[1]];
    } else {
      relationships[pair[0]].push(pair[1]);
    }

    if (!relationships[pair[1]]) {
      relationships[pair[1]] = [pair[0]];
    } else {
      relationships[pair[1]].push(pair[0]);
    }

  }
}
