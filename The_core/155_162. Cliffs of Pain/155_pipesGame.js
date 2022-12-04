// Carlos always loved playing video games, especially the well-known computer game "Pipes". Today he finally decided to write his own version of the legendary game from scratch.
// In this game the player has to place the pipes on a rectangular field to make water pour from each source to a respective sink. He has already come up with the entire program, but one question still bugs him: how can he best check that the arrangement of pipes is correct?
// It's your job to help him figure out exactly that.
// Carlos has 7 types of pipes in his game, with numbers corresponding to each type:
// 1 - vertical pipe
// 2 - horizontal pipe
// 3-6 - corner pipes
// 7 - two pipes crossed in the same cell (note that these pipes are not connected)
// Here they are, pipes 1 to 7, respectively:
// Water pours from each source in each direction that has a pipe connected to it (thus it can even pour in all four directions). The puzzle is solved correctly only if all water poured from each source eventually reaches a corresponding sink.
// Help Carlos check whether the arrangement of pipes is correct. If it is correct, return the number of cells with pipes that will be full of water at the end of the game. If not, return -X, where X is the number of cells with water before the first leakage point is reached, or if the first drop of water reaches an incorrect destination (whichever comes first). Assume that water moves from one cell to another at the same speed.

const initTest = [/[2367]/, /[1347]/, /[2457]/, /[1567]/];
const initDirNum = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];
const initDirLetters = ["L", "U", "R", "B"];

const directions = {
  L: [
    [2, 3, 6, 7],
    [
      [0, -1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ],
    ["L", "B", "U", "L"],
  ],
  U: [
    [1, 3, 4, 7],
    [
      [-1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ],
    ["U", "R", "L", "U"],
  ],
  R: [
    [2, 4, 5, 7],
    [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, 1],
    ],
    ["R", "B", "U", "R"],
  ],
  B: [
    [1, 5, 6, 7],
    [
      [1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ],
    ["B", "L", "R", "B"],
  ],
};

function solution(state) {
  const arr = state.map((str) => [...str]);
  const pipesArrangement = [];
  const leakage = [];
  const leakagePipes = [];
  let result = [];
  let lastCell;

  arr.map((row, i) =>
    row.map((col, j) => {
      if (/[a-z]/.test(col)) {
        getCorrectPipesForSource(arr, i, j).map((dirLetter) => {
          pipesArrangement.push(getPipesArrangement(arr, i, j, dirLetter));
        });
      }
    })
  );

  pipesArrangement.map((rowPipes) => {
    lastCell = rowPipes.pop();

    if (!/[A-Z]/.test(lastCell)) {
      leakage.push(rowPipes.length);
    }

    leakagePipes.push(rowPipes);
    result.push(...rowPipes);
  });

  if (leakage.length === 0) {
    return new Set(result).size;
  }

  result = [];

  leakagePipes.map((rowPipes) => {
    result.push(...rowPipes.slice(0, Math.min(...leakage)));
  });

  return -new Set(result).size;
}

function getCorrectPipesForSource(arr, i, j) {
  return initDirNum
    .map(([row, col], k) => {
      const regex = new RegExp(initTest[k]);

      return (
        arr[i + row] && regex.test(arr[i + row][j + col]) && initDirLetters[k]
      );
    })
    .filter((elm) => /[LURB]/.test(elm));
}

function getPipesArrangement(arr, i, j, dirLetter) {
  const cells = [];
  let pipeNums;
  let dirs;
  let letters;
  let idx;
  let [row, col] = initDirNum[initDirLetters.indexOf(dirLetter)];

  i += row;
  j += col;
  cells.push(i + "/" + j + "-" + arr[i][j]);

  while (/[1-7]/.test(arr[i][j])) {
    const [pipeNums, dirs, letters] = directions[dirLetter];
    idx = pipeNums.indexOf(arr[i][j] * 1);

    if (idx < 0) {
      break;
    }

    const [row, col] = dirs[idx];
    i += row;
    j += col;

    if (arr[i] === undefined) {
      cells.push(undefined);
      break;
    }

    dirLetter = letters[idx];
    cells.push(i + "/" + j + "-" + arr[i][j]);
  }

  return cells;
}
