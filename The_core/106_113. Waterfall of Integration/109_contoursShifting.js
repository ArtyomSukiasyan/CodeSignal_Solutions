// Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.
// Here is how Mark defines i-contours:
// the 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;
// consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;
// define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.
// Implement a function that does exactly what Mark wants to do to his matrix.

function solution(matrix) {
  const limit = matrix.length * matrix[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let x = 0;
  let y = 0;
  let di = 0;
  let layers = [];
  let curLayer = [];

  for (let i = 0; i < limit; i++) {
    curLayer.push(matrix[y][x]);
    matrix[y][x] = NaN;
    x += dx[di];
    y += dy[di];

    if (y >= matrix.length || isNaN(matrix[y][x])) {
      x -= dx[di];
      y -= dy[di];
      di = (di + 1) % dx.length;
      x += dx[di];
      y += dy[di];

      if (di === 0) {
        layers.push(curLayer);
        curLayer = [];
      }
    }
  }

  if (curLayer.length !== 0) {
    layers.push(curLayer);
  }

  layers = layers
    .map((val, i) => {
      i % 2 === 0
        ? (val = [val.pop()].concat(val))
        : val.push(val.splice(0, 1)[0]);

      return val.reverse();
    })
    .reverse();

  curLayer = layers.pop();
  x = 0;
  y = 0;
  di = 0;

  for (let i = 0; i < limit; i++) {
    matrix[y][x] = curLayer.pop();
    x += dx[di];
    y += dy[di];

    if (
      y >= matrix.length ||
      x >= matrix[0].length ||
      y < 0 ||
      x < 0 ||
      !isNaN(matrix[y][x])
    ) {
      x -= dx[di];
      y -= dy[di];
      di = (di + 1) % dx.length;
      x += dx[di];
      y += dy[di];

      if (di === 0) {
        curLayer = layers.pop();
      }
    }
  }

  return matrix;
}
