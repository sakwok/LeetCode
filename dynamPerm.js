const dynamPerm = (word) => {
  if (word.length === 1) {
    return [word];
  }
  const start = word.slice(0, word.length - 1);
  const prevs = dynamPerm(start);
  const end = word[word.length - 1];
  const allPerms = [];

  prevs.forEach(prev => {
    for (let i = 0; i <= prev.length; i++) {
      allPerms.push(prev.slice(0, i) + end + prev.slice(i, prev.length));
    }
  });

  return allPerms;
}