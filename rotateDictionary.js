var rotateDictionary = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2);

    if (arr[midpoint - 1] > arr[midpoint] && arr[midpoint + 1] > arr[midpoint]) {
      return midpoint;
    }

    if (arr[start] > arr[midpoint]) {
      end = midpoint - 1;
    }
    if (arr[midpoint] > arr[end]) {
      start = midpoint + 1;
    }
  }

  return start;
}