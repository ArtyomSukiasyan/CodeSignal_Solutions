function solution(grid) {
  let rows = Array(9).fill(1);
  let cols = Array(9).fill(1);
  let sqrs = Array(9).fill(1);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let number = grid[i][j];
      let k = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      rows[i] *= number;
      cols[j] *= number;
      sqrs[k] *= number;
    }
  }

  const nineFactorial = 362880;

  const isEveryRows = rows.every((el) => el === nineFactorial);
  const isEveryCols = cols.every((el) => el === nineFactorial);
  const isEverySqrs = sqrs.every((el) => el === nineFactorial);

  return isEveryRows && isEveryCols && isEverySqrs;
}
