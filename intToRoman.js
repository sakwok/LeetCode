var intToRoman = function(num) {
  let numSlice = num;
  let result = '';
  let numPlace = 1;
  const romanNumerals = ['I','V','X','L','C','D','M'];
  
  while (numSlice !== 0) {
      let value = numSlice % 10;
      numSlice = Math.floor(numSlice / 10);
      let one;
      let five;
      let ten;
      
      if (numPlace === 1) {
          one = romanNumerals[0];
          five = romanNumerals[1];
          ten = romanNumerals[2];
      } else if (numPlace === 10) {
          one = romanNumerals[2];
          five = romanNumerals[3];
          ten = romanNumerals[4];
      } else if (numPlace === 100) {
          one = romanNumerals[4];
          five = romanNumerals[5];
          ten = romanNumerals[6];
      } else if (numPlace === 1000) {
          one = romanNumerals[6];
      }
      
      if (value > 0 && value <= 3) {
         let less3 = '';
          for (let i = 0; i < value; i++) {
              less3 += one;
          }
          result = less3 + result;
      } else if (value === 4) {
          result = one + five + result;
      } else if (value === 5) {
          result = five + result;
      } else if (value > 5 && value < 9) {
          let less9 = five;
          for (let i = 0; i < value - 5; i++) {
              less9 += one;
          }
          result = less9 + result;
      } else if (value === 9) {
          result = one + ten + result;
      }
      
      numPlace *= 10;
  }
  
  return result;
};