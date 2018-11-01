function rotateImage(a) {
  let half = Math.floor(arr[0].length / 2);
  let holder = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < half; j++) {
      holder = a[i][j];
      a[i][j] = a[i][a[i].length - 1 - j];
      a[i][a[i].length - 1 - j] = holder;
    }
  }

  for (let x = -(a.length - 1); x <= 0; x++) {
    for (let y = 0; y < a.length; y++) {
      if (a[x][y]) {
        holder = a[x][y];

      }
    }
  }

  for (let a = 0; a < a.length; a++) {

  }

  return a;
}
