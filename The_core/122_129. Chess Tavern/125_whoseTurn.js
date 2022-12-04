// Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8.
// There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, as long as it is not occupied by either a friendly or an enemy knight.
// The players take turns in making moves, starting with the white player. Given the configuration p of the knights after an unspecified number of moves, determine whose turn it is.

function solution(p) {
  const positions = p.split(";");

  const whiteKnight1Color = getKnightColor(positions[0]);
  const whiteKnight2Color = getKnightColor(positions[1]);
  const blackKnight1Color = getKnightColor(positions[2]);
  const blackKnight2Color = getKnightColor(positions[3]);

  const isSameColor =
    whiteKnight1Color === whiteKnight2Color &&
    blackKnight1Color === blackKnight2Color;
  const isOppositeColor =
    whiteKnight1Color !== whiteKnight2Color &&
    blackKnight1Color !== blackKnight2Color;

  return isSameColor || isOppositeColor;
}

function getKnightColor(position) {
  const letterCharCode = position.charCodeAt(0) - 97;
  const number = Number(position[1]);

  return (letterCharCode + number) % 2;
}
