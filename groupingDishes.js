function groupingDishes(dishes) {
  const ingredients = {};

  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      if (!ingredients[dishes[i][j]]) {
        ingredients[dishes[i][j]] = [dishes[i][0]];
      } else {
        ingredients[dishes[i][j]].push(dishes[i][0]);
      }
    }
  }
  let result = [];

  for (key in ingredients) {
    let start = [key];
    result.push(start.concat(ingredients[key].sort()));
  }

  return result;
}

const alphSort = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
