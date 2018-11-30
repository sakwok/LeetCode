const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let holder = arr[start];
    arr[start] = arr[end];
    arr[end] = holder;
    start += 1;
    end -= 1;
  }
  return arr;
};
