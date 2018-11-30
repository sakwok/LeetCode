const mergeRanges = (meetings) => {
  const mergeSortTimes = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    const left = mergeSortTimes(arr.slice(0, midPoint));
    const right = mergeSortTimes(arr.slice(midPoint));

    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (sortedArr.length < left.length + right.length) {
      if (leftIndex < left.length || (rightIndex === right.length || left[leftIndex].startTime <= right[rightIndex].startTime) {
        sortedArr.push(left[leftIndex]);
        leftIndex += 1;
      } else {
        sortedArr.push(right[rightIndex]);
      }
    }
    return sortedArr;
  };

  const sortedMeetings = mergeSortTimes(meetings);

  let prev = sortedMeetings[0];

  const mergedMeetings = [];

  for (let i = 1; i < sortedMeetings.length; i++) {
    if (prev.endTime >= sortedMeetings[i].startTime || prev.startTime === sortedMeetings[i].startTime) {
      prev = {startTime: Math.min(prev.startTime,sortedMeetings[i].startTime), endTime: Math.max(sortedMeetings[i].endTime, prev.endTime)};
    } else {
      mergedMeetings.push(prev);
      prev = sortedMeetings[i];
    }
  }
  mergedMeetings.push(prev);

  return mergedMeetings;

};