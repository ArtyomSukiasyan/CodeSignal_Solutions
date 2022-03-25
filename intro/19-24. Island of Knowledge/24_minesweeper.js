// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

function solution(matrix) {
  const directions = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  minesweeper = (matrix) =>
    matrix.map((row, y) =>
      row.map((col, x) =>
        directions.reduce(
          (count, i) =>
            (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
          0
        )
      )
    );

  const dirs = [
    { r: -1, c: -1 },
    { r: -1, c: 0 },
    { r: -1, c: 1 },
    { r: 0, c: 1 },
    { r: 0, c: -1 },
    { r: 1, c: -1 },
    { r: 1, c: 0 },
    { r: 1, c: 1 },
  ];

  return matrix.map((a, r) =>
    a.map((_, c) =>
      dirs.reduce((p, v) => (p += (matrix[r + v.r] || [])[c + v.c] | 0), 0)
    )
  );
}
