// You are writing a spreadsheet application for an ancient operating system. The system runs on a computer so old that it can only display ASCII graphics. Currently you are stuck with implementing the cells joining algorithm.
// You are given a table in ASCII graphics, where the following characters are used for borders: +, -, |. The rows can have different heights and the columns can have different widths. Each cell has an area greater than 1 (excluding the borders) and can contain any ASCII characters excluding +, - and |.
// The algorithm you want to implement should merge the cells within a given rectangular part of the table into a single cell by removing the borders between them (i.e. replace them with space characters (' ') and replace redundant +s with correct border symbols). The cells to join are represented by the coordinates of the cells at the extreme bottom-left and top-right of the area.

function solution(table, coords) {
  table = table.map((s) => s.split(""));

  [a, b] = [coords[0][0], coords[1][0]].sort();

  [c, d] = [coords[0][1], coords[1][1]].sort();

  const rowCoords = table
    .map((x, i) => [x[0], i])
    .filter((x) => x[0] === "+")
    .map((x) => x[1]);

  const colCoords = table[0]
    .map((x, i) => [x, i])
    .filter((x) => x[0] === "+")
    .map((x) => x[1]);

  [a, b] = [rowCoords[a], rowCoords[b + 1]];
  [c, d] = [colCoords[c], colCoords[d + 1]];

  for (let i = a; i <= b; ++i) {
    for (let j = c; j <= d; ++j) {
      if (j > c && j < d && i === a && (i === 0 || table[i - 1][j] !== "|")) {
        table[i][j] = "-";
      } else if (
        j > c &&
        j < d &&
        i === b &&
        (i === table.length - 1 || table[i + 1][j] != "|")
      ) {
        table[i][j] = "-";
      } else if (
        i > a &&
        i < b &&
        j === c &&
        (j === 0 || table[i][j - 1] !== "-")
      ) {
        table[i][j] = "|";
      } else if (
        i > a &&
        i < b &&
        j === d &&
        (j === table[0].length - 1 || table[i][j + 1] !== "-")
      ) {
        table[i][j] = "|";
      } else if (
        i > a &&
        i < b &&
        j > c &&
        j < d &&
        "-|+".indexOf(table[i][j]) > -1
      ) {
        table[i][j] = " ";
      }
    }
  }
  return table.map((r) => r.join(""));
}
