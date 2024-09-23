const isPrime = (n) => {
  // let arrOFTruthy = [];
  // for (i = 2; i <= 10; i++) {
  //   if (n !== i) arrOFTruthy[i] = n % i === 0;
  // }
  // if (!arrOFTruthy.includes(true)) {
  //   return true;
  // }
  // return false;

  /* my soln */

  // if(n<2)return false
  // for(let i =2;i<n;i++){
  //   if(n%i===0){
  //     return false
  //   }
  //   return true
  // }
  /**my tutor soln */
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;  // Early exit for even numbers

  for (let i = 3; i <= Math.sqrt(n); i += 2) {  // Skip even numbers
    if (n % i === 0) return false;
  }
  return true;
  // gpt soln which handles even larger prime number

};
console.log(isPrime(6));
