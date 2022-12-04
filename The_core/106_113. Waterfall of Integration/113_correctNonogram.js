// A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.
// You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.
// Determine if the given nonogram has been solved correctly.
// Note: here / means integer division.

function solution(size, nonogramField) {
  const offset = Math.ceil(size / 2);

  function match(numsChunk, canvChunk) {
    const numbersSeq = numsChunk.filter((cell) => cell !== "-");
    const canvasSeq = canvChunk
      .join("")
      .split(".")
      .filter((hashes) => hashes)
      .map((hashes) => hashes.length);

    return numbersSeq.join("") === canvasSeq.join("");
  }

  function isRowsCorrect() {
    for (let i = offset; i < nonogramField.length; i++) {
      const numbers = nonogramField[i].slice(0, offset);
      const canvas = nonogramField[i].slice(offset);

      if (!match(numbers, canvas)) {
        return false;
      }
    }

    return true;
  }

  function isColumnsCorrect() {
    for (let i = offset; i < size + offset; i++) {
      const column = [];

      for (let j = 0; j < nonogramField.length; j++) {
        column.push(nonogramField[j][i]);
      }

      const numbers = column.slice(0, offset);
      const canvas = column.slice(offset);

      if (!match(numbers, canvas)) {
        return false;
      }
    }

    return true;
  }

  return isRowsCorrect() && isColumnsCorrect();
}
