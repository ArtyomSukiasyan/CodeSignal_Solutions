// Let's play Tetris! But first we need to define the rules, especially since they probably differ from the way you've played Tetris before.
// There is an empty field with 20 rows and 10 columns, which is initially empty. Random pieces appear on the field, each composed of four square blocks. You can't change the piece's shape, but you can rotate it 90 degree clockwise (possibly several times) and choose which columns it will appear within. Once you've rotated the piece and have set its starting position, it appears at the topmost row where you placed it and falls down until it can't fall any further. The objective of the game is to create horizontal lines composed of 10 blocks. When such a line is created, it disappears, and all lines above the deleted one move down. The player receives 1 point for each deleted row.
// Your task is to implement an algorithm that places each new piece optimally. The piece is considered to be placed optimally if:
// The total number of blocks in the rows this piece will occupy after falling down is maximized;
// Among all positions with that value maximized, this position requires the least number of rotations;
// Among all positions that require the minimum number of rotations, this one is the leftmost one (i.e. the leftmost block's position is as far to the left as possible).
// The piece can't leave the field. It is guaranteed that it is always possible to place the Tetris piece in the field.
// Implement this algorithm and calculate the number of points that you will get for the given set of pieces.

function solution(pieces) {
  const map = Array.from({ length: 20 }, (_) => new Array(10).fill("."));
  const status = new Array(20).fill(0);
  let points = 0;
  const rotate = (shape) =>
    Array.from({ length: shape[0].length }, (_, i) =>
      Array.from(
        { length: shape.length },
        (_, j) => shape[shape.length - 1 - j][i]
      )
    );

  function clear(line) {
    while ((line = status.indexOf(10)) !== -1) {
      points++;
      map.splice(line, 1);
      status.splice(line, 1);
      map.unshift(new Array(10).fill("."));
      status.unshift(0);
    }
  }

  function placePiece(x, y, shape, render) {
    for (let i of shape.keys()) {
      for (let j of shape[0].keys()) {
        if (!render && shape[i][j] === "#" && map[x + i][y + j] === "#") {
          return false;
        }

        render && shape[i][j] === "#" && (map[x + i][y + j] = "#");
      }
    }
    return true;
  }
  pieces.map((shape) => {
    let maxBlocks = -1;
    let pos;
    let rotations = [shape];
    for (let i = 0; i < 3; i++) rotations.push(rotate(rotations[i]));
    rotations.map((arr, rotateType) => {
      const h = arr.length,
        w = arr[0].length;
      for (let j = 0; j + w <= 10; j++) {
        let highestBase = 19,
          i;
        while (status[highestBase]) {
          highestBase--;
        }
        for (; highestBase < 20; highestBase++) {
          i = highestBase + 1 - h;
          let totalBlocks = arr.reduce((t, v, k) => (t += status[i + k]), 0);
          if (placePiece(i, j, arr, false)) {
            if (totalBlocks > maxBlocks) {
              maxBlocks = totalBlocks;
              pos = [i, j, rotateType];
            }
          } else {
            break;
          }
        }
      }
    });
    const [x, y, type] = pos;
    placePiece(x, y, rotations[type], true);
    rotations[type].map(
      (_, i) => (status[x + i] += _.filter((v) => v === "#").length)
    );
    clear();
  });

  return points;
}
