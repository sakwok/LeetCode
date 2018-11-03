var reverse = function(x) {
    
  let sign = 1;
  if (x < 0) {
      sign = -1
  }
  let newX = Math.abs(x);
  let remainDiv = 1;
  let tensPlace = 1;
  let tens = 10;
  let tens2 = 10;
  let result = 0;
  
  while (x % tens !== x) {
      tens = tens * 10;
      tensPlace++;
  }
  
  tens = tens / 10;
  
  for (let i = 0; i < tensPlace; i++) {
      result = result + Math.floor(newX % tens2 / remainDiv) * tens;
      tens = tens / 10;
      tens2 = tens2 * 10;
      remainDiv = remainDiv * 10;
  }
  
  return result * sign;
};