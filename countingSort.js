var countingSort = (arr) => {
  largestInt = arr[0];

  arr.forEach(element => {
    if (element > largestInt) {
      largestInt = element;
    }
  });

  const numCounts = new Array(largestInt + 1).fill(0);

  arr.forEach((element) => {
    numCounts[element] += 1;
  });

  const sortedArr = [];
  for (let i = 0; i < numCounts.length; i++) {
    for (let j = 0; j < numCounts[i]; j++) {
      sortedArr.push(i);
    }
  }

  return sortedArr;
}