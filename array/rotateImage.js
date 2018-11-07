function rotateImage(a) {
  for (let i = 0; i < Math.floor(a.length/2); i++) {
      for (let j = 0; j < a.length - 1 - i*2; j++) {
          let holder = a[i][j + i];
          
          a[i][j + i] = a[a.length - 1 - j - i][i];
          a[a.length - 1 - j - i][i] = a[a.length - 1 - i][a.length - 1 - i - j];
          a[a.length - 1 - i][a.length - 1 - i - j] = a[i + j][a.length - 1 - i];
          a[i + j][a.length - 1 - i] = holder;
      }
  }
  return a;
}
