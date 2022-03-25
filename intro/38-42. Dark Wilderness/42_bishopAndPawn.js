// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

function solution(bishop, pawn) {
  let bishopCoords = bishop.split("");
  let pawnCoords = pawn.split("");
  bishopCoords[0] = 1 + bishopCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords[1] = Number(bishopCoords[1]);
  pawnCoords[0] = 1 + pawnCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  pawnCoords[1] = Number(pawnCoords[1]);
  
  return (
    bishopCoords[0] - bishopCoords[1] === pawnCoords[0] - pawnCoords[1] ||
    bishopCoords[0] + bishopCoords[1] === pawnCoords[0] + pawnCoords[1]
  );
}
