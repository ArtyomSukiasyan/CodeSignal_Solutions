// Determine if the given number is a power of some non-negative integer.

function solution(n) {
  let i = 2;

  while (Math.pow(n, 1 / i) >= 2) {
    const powN = Math.pow(n, 1 / i);
    const roundPowN = Math.round(powN);
    const powRoundPownN = Math.pow(roundPowN, i);

    if (Math.ceil(powRoundPownN === n)) {
      return true;
    }
    
    i++;
  }

  return n === 1;
}
