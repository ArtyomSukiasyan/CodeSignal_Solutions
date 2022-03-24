// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

function solution(n) {
  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }

  let i = 1;
  let round = 0;

  for (let xy = n; xy > 0; xy -= 2) {
    for (let xr = 0; xr < xy; xr++) {
      res[round][xr + round] = i++;
    }

    for (let yd = round + 1; yd < xy + round; yd++) {
      res[yd][xy - 1 + round] = i++;
    }

    for (let xl = xy - 2 + round; xl >= round; xl--) {
      res[xy - 1 + round][xl] = i++;
    }

    for (let yu = xy - 2 + round; yu > round; yu--) {
      res[yu][round] = i++;
    }

    round++;
  }
  
  return res;
}
