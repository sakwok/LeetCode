//assuming contains elements 1..n
//contains n+1 or more values

var findDuplicates = (arr) => {
  let floor = 1;
  let ceiling = arr.length - 1;
  let midpoint = Math.floor((ceiling + floor) / 2);
  let leftFloor = floor;
  let leftCeiling = midpoint;
  let rightFloor = midpoint + 1;
  let rightCeiling = ceiling;

  while (floor < ceiling) {
    let numLeftRange = leftCeiling - leftFloor + 1;
    let countLeftRange = 0;
    arr.forEach((item) => {
      if (item >= leftFloor && item <= leftCeiling) {
        countLeftRange += 1;
      }
    });

    if (countLeftRange > numLeftRange) {
      floor = leftFloor;
      ceiling = leftCeiling;
    } else {
      floor = rightFloor;
      ceiling = rightCeiling;
    }
  }
  return floor;
}