// Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.
// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

function solution(l, r) {
  let pairs = 0;
  
  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r; j++) {
      if (i + calcSum(i) >= j && j - calcSum(j) <= i) {
        pairs++;
      }
    }
  }

  return pairs;
}

function calcSum(x) {
  let sum = 0;

  while (x) {
    let digit = x % 10;
    sum += digit;
    x = Math.trunc(x / 10);
  }

  return sum;
}
