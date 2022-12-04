// The longest diagonals of a square matrix are defined as follows:
// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

function solution(matrix) {
  let reversed = matrix.map((row) => row.slice());
  const matrixLength = matrix.length;

  for (let i = 0; i < matrixLength; i++) {
    reversed[i][i] = matrix[matrixLength - 1 - i][matrixLength - 1 - i];
    reversed[matrixLength - i - 1][i] = matrix[i][matrixLength - i - 1];
  }

  return reversed;
}
