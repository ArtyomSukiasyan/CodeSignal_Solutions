// The longest diagonals of a square matrix are defined as follows:
// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

function solution(matrix) {
  const reversed = matrix.map((row) => row.slice());
  const matrixLength = matrix.length;

  for (var i = 0; i < matrixLength; i++) {
    reversed[i][i] = matrix[i][matrixLength - i - 1];
    reversed[i][matrixLength - i - 1] = matrix[i][i];
  }

  return reversed;
}
