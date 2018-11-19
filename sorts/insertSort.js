
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let prevValues = i - 1;
    while (prevValues > -1 && arr[prevValues] > key) {
      arr[prevValues + 1] = arr[prevValues];
      prevValues -= 1;
    }
    arr[prevValues + 1] = key;
  }
  return arr;
}

insertSort([3,2,1]);