const isPrime = (n) => {
  let arrOFTruthy = [];
  for (i = 2; i <= 10; i++) {
    if (n !== i) arrOFTruthy[i] = n % i === 0;
  }
  if (!arrOFTruthy.includes(true)) {
    return true;
  }
  return false;
};
console.log(isPrime(121));
