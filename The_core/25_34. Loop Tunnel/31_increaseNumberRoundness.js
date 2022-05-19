// Define an integer's roundness as the number of trailing zeroes in it.
// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

function solution(n) {
  let gotToSignificant = false;

  while (n > 0) {
    if (n % 10 === 0 && gotToSignificant) {
      return true;
    }
    
    if (n % 10 !== 0) {
      gotToSignificant = true;
    }

    n = (n / 10) | 0;
  }

  return false;
}
