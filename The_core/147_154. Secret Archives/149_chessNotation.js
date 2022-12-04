// John has always had trouble remembering chess game positions. To help himself with remembering, he decided to store game positions in strings. He came up with the following position notation:
// The notation is built for the current game position row by row from top to bottom, with '/' separating each row notation;
// Within each row, the contents of each square are described from the leftmost column to the rightmost;
// Each piece is identified by a single letter taken from the standard English names ('P' = pawn, 'N' = knight, 'B' = bishop, 'R' = rook, 'Q' = queen, 'K' = king);
// White pieces are designated using upper-case letters ("PNBRQK") while black pieces use lowercase ("pnbrqk");
// Empty squares are noted using digits 1 through 8 (the number of empty squares from the last piece);
// Empty lines are noted as "8".

function solution(n) {
  n = n.replaceAll(/\d/g, (x) => "_".repeat(x));
  n = n.split("/").map((x) => x.split(""));

  return n[0]
    .map((x, i) => n.map((y) => y[i]).reverse())
    .join("/")
    .replaceAll(",", "")
    .replaceAll(/_+/g, (x) => x.length);
}
