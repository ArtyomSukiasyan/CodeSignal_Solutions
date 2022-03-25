// Given two cells on the standard chess board, determine whether they have the same color or not.

function solution(cell1, cell2) {
  const charCodeCell1 = cell1.charCodeAt(0);
  const charCodeCell2 = cell2.charCodeAt(0);

  const idx1 = Number(cell1[1]) % 2;
  const idx2 = Number(cell2[1]) % 2;

  const even1 = charCodeCell1 % 2;
  const even2 = charCodeCell2 % 2;

  const a = idx1 + even1;
  const b = idx2 + even2;

  return a % 2 === b % 2;
}
