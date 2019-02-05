var cons = (a, b) => {
  var pair = (f) => {
    return f(a, b);
  }
  return pair;
}

var car = (pair) => {
  var getLeft = (a, b) => {
    return a;
  }
  return pair(getLeft);
}

var cdr = (pair) => {
  var getRight = (a, b) => {
    return b;
  }
  return pair(getRight);
}