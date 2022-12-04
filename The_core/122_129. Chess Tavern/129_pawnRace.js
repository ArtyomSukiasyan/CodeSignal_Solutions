// Pawn race is a game for two people, played on an ordinary 8 × 8 chessboard. The first player has a white pawn, the second one - a black pawn. Initially the pawns are placed somewhere on the board so that the 1st and the 8th rows are not occupied. Players take turns to make a move.
// White pawn moves upwards, black one moves downwards. The following moves are allowed:
// one-cell move on the same vertical in the allowed direction;
// two-cell move on the same vertical in the allowed direction, if the pawn is standing on the 2nd (for the white pawn) or the 7th (for the black pawn) row. Note that even with the two-cell move a pawn can't jump over the opponent's pawn;
// capture move one cell forward in the allowed direction and one cell to the left or to the right.
// The purpose of the game is to reach the the 1st row (for the black pawn) or the 8th row (for the white one), or to capture the opponent's pawn.
// Given the initial positions and whose turn it is, determine who will win or declare it a draw (i.e. it is impossible for any player to win). Assume that the players play optimally.

function solution(white, black, toMove) {
  let whiteDistance = Math.min(5, 8 - white[1]);
  let blackDistance = Math.min(5, black[1] - 1);

  if (white[0] === black[0] && white[1] < black[1]) {
    return "draw";
  }

  if (
    Math.abs(white.charCodeAt(0) - black.charCodeAt(0)) !== 1 ||
    white[1] >= black[1]
  ) {
    if (whiteDistance === blackDistance) {
      return toMove === "w" ? "white" : "black";
    }

    return whiteDistance < blackDistance ? "white" : "black";
  }

  if (white[1] + 1 === black[1]) {
    return toMove === "w" ? "white" : "black";
  }

  if (white[1] === "2" && black[1] === "7") {
    return toMove == "w" ? "black" : "white";
  }

  if (
    (white[1] === "2" && black[1] === 4) ||
    (white[1] === 5 && black[1] === 7)
  ) {
    return toMove === "w" ? "black" : "white";
  }

  if ((white[1] === "2" && black[1] == 5) || (white[1] == 4 && black[1] == 7)) {
    return toMove == "w" ? "white" : "black";
  }

  if (white[1] === "2" && black[1] === 6) {
    return "white";
  }

  if (white[1] === "3" && black[1] === "7") {
    return "black";
  }

  return (Math.abs(white[1] - black[1]) + (toMove === "w" ? 1 : 0)) % 2 === 0
    ? "white"
    : "black";
}
