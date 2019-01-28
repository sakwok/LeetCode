const numInversions = (arr) => {

  let local = 0;
  const helper = (arr) => {
    if (arr.length === 1) {
      return 0;
    }

    const midPoint = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, midPoint);
    let rightHalf = arr.slice(midPoint);

    let firstInv = helper(leftHalf);
    let endInv = helper(rightHalf);

    let i = 0;
    let j = 0;
    let totalLength = leftHalf.length + rightHalf.length;

    let crossInversions = 0;
    while (i + j < totalLength) {
      if (leftHalf.length === 1 && rightHalf.length === 1 && rightHalf[0] > leftHalf[0]) {
        local += 1;
        return 1;
      }
      if (lefthalf[i] && leftHalf[i] < rightHalf[j]) {

        crossInversions += leftHalf.length;
        arr[i + j] = rightHalf[i];
        j++
      } else {
        arr[i + j] = leftHalf[i];
        i++;
      }
    }

    return crossInversions + firstInv + endInv;
  }

  return helper(arr) === local;


}