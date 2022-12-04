// An amazon (also known as a queen + knight compound) is an imaginary chess piece that can move like a queen or a knight (or, equivalently, like a rook, bishop, or knight). The diagram below shows all squares which the amazon can attack from e4 (circles represent knight-like moves while crosses correspond to queen-like moves).
// Recently, you've come across a diagram with only three pieces left on the board: a white amazon, the white king, and the black king. It's black's move. You don't have time to determine whether the game is over or not, but you'd like to figure it out in your head. Unfortunately, the diagram is smudged and you can't see the position of the black king, so you'll need to consider all possible positions.
// Given the positions of the white pieces on a standard chessboard (using algebraic notation), your task is to determine the number of possible black king's positions such that:
// it's checkmate (i.e. black's king is under the amazon's attack and it cannot make a valid move);
// it's check (i.e. black's king is under the amazon's attack but it can reach a safe square in one move);
// it's stalemate (i.e. black's king is on a safe square but it cannot make a valid move);
// black's king is on a safe square and it can make a valid move.
// Note that two kings cannot be placed on two adjacent squares (including two diagonally adjacent ones).

function solution(king, amazon) {
  const kx = king[0].charCodeAt(0) - "a".charCodeAt(0);
  const ky = Number(king[1]) - 1;
  const ax = amazon[0].charCodeAt(0) - "a".charCodeAt(0);
  const ay = Number(amazon[1]) - 1;

  unsafe = Array(8)
    .fill(false)
    .map((_) => Array(8).fill(false));

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i || j) {
        line(unsafe, ax, ay, kx, ky, j, i);
        if (ky + i >= 0 && ky + i < 8 && kx + j >= 0 && kx + j < 8) {
          unsafe[ky + i][kx + j] = true;
        }
      }
    }
  }

  leap(unsafe, ax, ay, 1, 2);
  leap(unsafe, ax, ay, 2, 1);

  const r = [0, 0, 0, 0];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (
        (Math.abs(j - kx) > 1 || Math.abs(i - ky) > 1) &&
        (i != ay || j != ax)
      ) {
        let anySafe = false;
        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            if (
              (k || l) &&
              i + k >= 0 &&
              i + k < 8 &&
              j + l >= 0 &&
              j + l < 8
            ) {
              anySafe |= !unsafe[i + k][j + l];
            }
          }
        }
        r[(!unsafe[i][j] << 1) | anySafe]++;
      }
    }
  }
  return r;
}

function line(unsafe, ax, ay, kx, ky, x, y) {
  for (
    let i = ay + y, j = ax + x;
    i < 8 && i >= 0 && j < 8 && j >= 0;
    i += y, j += x
  ) {
    if (j == kx && i == ky) {
      break;
    }

    unsafe[i][j] = true;
  }
}

function leap(unsafe, ax, ay, x, y) {
  for (let i = ay - y; i <= ay + y; i += y << 1) {
    if (i >= 0 && i < 8) {
      for (let j = ax - x; j <= ax + x; j += x << 1) {
        if (j >= 0 && j < 8) {
          unsafe[i][j] = true;
        }
      }
    }
  }
}
