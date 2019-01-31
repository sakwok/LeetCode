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
      if (i === leftHalf.length - 1 && j === 0 && rightHalf[0] < leftHalf[0]) {
        local += 1;
        return 1;
      }
      if (typeof leftHalf[i] === 'number' && leftHalf[i] < rightHalf[j]) {
        arr[i + j] = leftHalf[i];
        i++;
      }
      else if (typeof rightHalf[j] === 'number' && rightHalf[j] < leftHalf[i]) {
        crossInversions += leftHalf.length;
        arr[i + j] = rightHalf[j];
        j++
      } else {
        arr[i + j] = rightHalf[j];
        j++
      }
    }

    return crossInversions + firstInv + endInv;
  }

  return helper(arr) === local;


}