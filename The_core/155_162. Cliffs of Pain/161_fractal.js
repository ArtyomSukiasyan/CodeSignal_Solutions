// Your task is to draw a special solution after n iterations. The solution consists of unit connectors '|' and '_'.
// For n = 1 the solution looks as follows:
// _
// _|
// Now assume that you have already made N iterations and drawn the f(N) solution. To draw the f(N + 1) solution do the following:
// Note that every solution has exactly two edge points which can be connected to the edge points of other solutions using the unit connectors.
// At first, take the f(N) solution and place it in the top left corner. As the next step, put f(N) rotated by 0°, 90°, 180° or 270° in the remaining 3 quarters - top right, bottom left and bottom right - so that it is possible to connect all four of them by adding exactly 3 unit connectors between the adjacent solution edge points.
// Note that there is always exactly one possible combination of rotations which allows to connect all 4 f(N) solutions together.
// See examples below for better understanding.

function solution(n) {
  let matrix = [
    [" ", "_", " "],
    [" ", "_", "|"],
  ];

  for (let i = 1; i < n; i++) {
    if (i % 2 === 1) {
      matrix = firstApproach(matrix);
    } else {
      matrix = secondApproach(matrix);
    }

    fillFlatSpaces(matrix);
  }

  return matrix;
}

function firstApproach(matrix) {
  const middle = new Array(matrix.length)
    .fill(" ")
    .map((row) => new Array(1).fill(" "));
  const newMatrix = append(matrix, middle, rotateN(matrix, 2));
  const bottom = append(rotateN(matrix, 1), middle, rotateN(matrix, 1));
  const bottomWidth = bottom[0].length;
  bottom[0][0] = "|";
  bottom[0][bottomWidth - 1] = "|";
  bottom[0][Math.floor(bottomWidth / 2)] = "_";
  newMatrix.push(...bottom);

  return newMatrix;
}

function secondApproach(matrix) {
  const middle = new Array(matrix.length)
    .fill(" ")
    .map((row) => new Array(1).fill(" "));
  const newMatrix = append(matrix, middle, rotateN(matrix, 3));
  const width = newMatrix[0].length;
  newMatrix[0][Math.floor(width / 2)] = "_";

  const bottom = append(rotateN(matrix, 2), middle, rotateN(matrix, 3));

  bottom[0][Math.ceil(width / 2)] = "|";
  bottom[bottom.length - 1][Math.floor(width / 2)] = "_";
  newMatrix.push(...bottom);

  return newMatrix;
}

function append(matrix1, ...rest) {
  rest.forEach(
    (matrix2) => (matrix1 = matrix1.map((row, i) => [...row, ...matrix2[i]]))
  );

  return matrix1;
}

function rotateN(matrix, n) {
  for (let i = 0; i < n; i++) {
    matrix = rotate(matrix);
  }

  return matrix;
}

function fillFlatSpaces(matrix) {
  for (let x = 1; x < matrix[0].length - 2; x += 2) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] === "_" && matrix[y][x + 2] === "_") {
        matrix[y][x + 1] = "_";
      }
    }
  }
}

function rotate(matrix) {
  const newMatrix = new Array(matrix.length)
    .fill(" ")
    .map((row) => new Array(matrix[0].length).fill(" "));

  for (let x = 0; x < matrix[0].length; x += 2) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] == "|") {
        const newX = (matrix.length - 1 - y) * 2 + 1;
        const newY = x / 2;
        newMatrix[newY][newX] = "_";
      }
    }
  }

  for (let x = 1; x < matrix[0].length; x += 2) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] == "_") {
        const newX = (matrix.length - 1 - y) * 2;
        const newY = Math.ceil(x / 2);
        newMatrix[newY][newX] = "|";
      }
    }
  }

  return newMatrix;
}
