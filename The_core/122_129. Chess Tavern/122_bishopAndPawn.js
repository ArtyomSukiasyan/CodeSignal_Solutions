// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

function solution(bishop, pawn) {
  const charCodeDiff = bishop.charCodeAt(0) - pawn.charCodeAt(0);
  const numberDiff = Number(pawn[1]) - Number(bishop[1]);

  return Math.abs(charCodeDiff) === Math.abs(numberDiff);
}
