// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.
// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:
// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

function solution(n) {
  const divisors = new Array(n).fill(0);
  let weak = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let temp = 0;
    divisors[i - 1] = CalcDivisorsCount(i);

    for (let j = 1; j < i; j++) {
      if (divisors[j - 1] > divisors[i - 1]) temp++;
    }
    if (temp === weak) {
      count++;
    } else if (temp > weak) {
      weak = temp;
      count = 1;
    }
  }

  return [weak, count];
}

function CalcDivisorsCount(x) {
  let count = 0;

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      count++;
    }
  }

  return count;
}
