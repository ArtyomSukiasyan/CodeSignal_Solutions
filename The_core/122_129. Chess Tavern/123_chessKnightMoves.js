// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function solution(cell) {
  const posibleMoves = ([i, j]) => [
    [i - 2, j - 1],
    [i - 1, j - 2],
    [i - 2, j + 1],
    [i - 1, j + 2],
    [i + 2, j - 1],
    [i + 1, j - 2],
    [i + 2, j + 1],
    [i + 1, j + 2],
  ];

  const cellCoords = cell.split("");

  cellCoords[0] = 1 + cellCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  cellCoords[1] = Number(cellCoords[1]);

  return posibleMoves(cellCoords).filter(
    (c) => c[0] > 0 && c[0] < 9 && c[1] > 0 && c[1] < 9
  ).length;
}
