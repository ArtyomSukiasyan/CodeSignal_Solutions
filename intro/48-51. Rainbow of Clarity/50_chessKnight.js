// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function solution(cell) {
  const n = Number(cell[1]);
  const l = cell[0].charCodeAt() - 96;

  const move1 = 8 - n >= 2 && l + 1 <= 8;
  const move2 = 8 - n >= 1 && l + 2 <= 8;
  const move3 = n - 1 >= 1 && l + 2 <= 8;
  const move4 = n - 2 >= 1 && l + 1 <= 8;
  const move5 = n - 2 >= 1 && l - 1 >= 1;
  const move6 = n - 1 >= 1 && l - 2 >= 1;
  const move7 = n + 1 <= 8 && l - 2 >= 1;
  const move8 = n + 2 <= 8 && l - 1 >= 1;

  return move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8;
}
