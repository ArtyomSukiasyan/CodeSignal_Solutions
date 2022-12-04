// You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.
// Find the perimeter of the black figure assuming that a single cell has unit length.
// It's guaranteed that there is at least one black cell on the table.

function solution(matrix) {
  const adjacents = (i, j) => [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j],
  ];

  let perimeter = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      perimeter +=
        matrix[i][j] &&
        adjacents(i, j).reduce((acc, pos) => {
          return (
            acc +
            (pos[0] < 0 ||
              pos[1] < 0 ||
              pos[0] == matrix.length ||
              pos[1] === matrix[0].length ||
              !matrix[pos[0]][pos[1]])
          );
        }, 0);
    }
  }

  return perimeter;
}
