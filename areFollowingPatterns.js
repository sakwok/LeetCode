function areFollowingPatterns(strings, patterns) {
  const translate = {};
  const translate2 = {};
  for (let i = 0; i < strings.length; i++) {
    translate[patterns[i]] = strings[i];
    translate2[strings[i]] = patterns[i];
  }

  if (Object.keys(translate).length !== Object.keys(translate2).length) {
    return false;
  }

  for (let i = 0; i < strings.length; i++) {
    if (translate[patterns[i]] !== strings[i]) {
      return false;
    }
  }

  return true;
}
