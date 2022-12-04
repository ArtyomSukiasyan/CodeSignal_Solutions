// Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.

function solution(matrix, a, b) {
  const sumOfA = matrix[a].reduce((c, d) => c + d, 0);
  const sumOfMatrix = matrix.reduce((acc, row) => acc + row[b], 0);

  return sumOfA + sumOfMatrix - matrix[a][b];
}
