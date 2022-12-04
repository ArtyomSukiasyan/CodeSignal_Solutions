// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

function solution(matrix) {
  return matrix.map((l, i) =>
    l.map(
      (e, j) =>
        matrix
          .slice(Math.max(0, i - 1), i + 2)
          .map((f) =>
            f.slice(Math.max(0, j - 1), j + 2).reduce((a, b) => a + b)
          )
          .reduce((a, b) => a + b) - e
    )
  );
}
