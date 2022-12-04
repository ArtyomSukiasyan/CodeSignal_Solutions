// Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

function solution(matrix) {
  let isPosible = true;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== j) {
        isPosible =
          isPosible &&
          (matrix[i].every((el, id) => el > matrix[j][id]) ||
            matrix[i].every((el, id) => el < matrix[j][id]));
      }
    }
  }

  return isPosible;
}
