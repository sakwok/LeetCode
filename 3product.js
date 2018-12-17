var tripleProduct = (multiples) => {
  let highest1 = 0;
  let highest2 = 0;
  let highest3 = 0;
  let neg1 = 0;
  let neg2 = 0;

  for (let i = 0; i < multiples.length; i++) {
    if (multiples[i] > highest1) {
      highest3 = highest2;
      highest2 = highest1;
      highest1 = multiples[i];
    } else if (multiples[i] > highest2) {
      highest3 = highest2;
      highest2 = multiples[i];
    } else if (multiples[i] > highest3) {
      highest3 = multiples[i];
    } else if (multiples[i] < neg1) {
      neg2 = neg1;
      neg1 = multiples[i];
    } else if (multiples[i] < neg2) {
      neg2 = multiples[i];
    }
  }

  const posProd = highest1 * highest2 * highest3;
  const negProd = neg1 * neg2 * highest1;

  if (posProd > negProd) {
    return posProd;
  } else {
    return negProd;
  }
}