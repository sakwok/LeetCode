var appleStocks = (stockPrices) => {
  if (stockPrices.length < 2) {
    return 0;
  }

  let buy = stockPrices[0];
  let sell = stockPrices[1];

  let results = [0];

  for (let i = 0; i < stockPrices.length; i++) {
    if (stockPrices[i] < buy) {
      sell = 0;
      buy = stockPrices[i];
    }

    if (stockPrices[i] > sell) {
      sell = stockPrices[i];
    }

    results.push(sell - buy);
  }

  let most = results[0];

  for (let j = 0; j < results.length; j++) {
    if (results[j] > most) {
      most = results[j];
    }
  }

  return most;
}