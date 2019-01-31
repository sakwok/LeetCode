function possibleSums(coins, quantity) {
  const allCoins = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < quantity[i]; j++) {
      allCoins.push(coins[i]);
    }
  }

  const uniqueSums = {};

  const helper = (index, sum) => {
    for (let i = index; i < allCoins.length; i++) {
      let currSum = sum + allCoins[i];
      uniqueSums[currSum] = currSum;
      helper(i + 1, currSum);
    }
  };

  helper(0, 0);

  return Object.keys(uniqueSums).length;

}

