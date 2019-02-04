var productArrayPuzzle = function (arr) {
  const left = [1];
  const arrLength = arr.length;
  const right = new Array(arrLength);
  right[arrLength - 1] = 1;
  const result = [];

  for (let i = 1; i < arrLength; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }

  for (let j = arrLength - 2; j >= 0; j--) {
    right[j] = right[j + 1] * arr[j + 1];
  }

  for (let k = 0; k < arrLength; k++) {
    result[k] = left[k] * right[k];
  }

  return result;

}