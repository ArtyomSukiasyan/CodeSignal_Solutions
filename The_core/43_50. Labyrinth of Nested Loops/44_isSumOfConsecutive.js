// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

function solution(n) {
  let count = 0;
  let partN = n / 2;

  for (let i = 2; i < partN; i++) {
    const isMoreHalf = n / i > i / 2;

    if (i % 2) {
      const roundN = Math.round(n / i);

      if (roundN * i === n && isMoreHalf) {
        count++;
      }
    } else {
      const floorN = Math.floor(n / i);
      const ceilN = Math.ceil(n / i);
      const sumNums = floorN + ceilN;

      if (floorN * i !== n && sumNums === (n * 2) / i && isMoreHalf) {
        count++;
      }
    }
  }

  return count;
}
