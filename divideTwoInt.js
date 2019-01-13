var divide = function (dividend, divisor) {
  const divisorNeg = divisor > 0 ? false : true;
  const dividNeg = dividend >= 0 ? false : true;
  let count = 0;
  let subValue = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);

  while (subValue >= absDivisor) {
    subValue -= absDivisor;
    count += 1;
  }

  if ((!divisorNeg && !dividNeg) || (divisorNeg && dividNeg)) {
    return count;
  } else {
    return count * -1;
  }
};