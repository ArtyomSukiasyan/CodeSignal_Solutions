// Your task is to imitate a turn-based variation of the popular "Snake" game.
// You are given the initial configuration of the board and a list of commands which the snake follows one-by-one. The game ends if one of the following happens:
// the snake tries to eat its tail;
// the snake tries to move out of the board;
// it executes all the given commands.
// Output the board configuration after the game ends.

function solution(gameBoard, commands) {
  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];
  const row = gameBoard.length;
  const col = gameBoard[0].length;
  const control = "<^>v";
  let dir;
  let snake = [];
  let head;
  let visited = Array.from({ length: row }, (v) => new Array(col).fill(false));
  let finalState = gameBoard.map((v) => v.map(() => "."));

  function getSnake(X, Y) {
    const positions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let d of positions) {
      const [dx, dy] = d;
      let x = X + dx,
        y = Y + dy;

      if (-1 < x && x < row && -1 < y && y < col && !visited[x][y]) {
        if (gameBoard[x][y] === "*") {
          visited[x][y] = true;
          snake.push([x, y]);
          getSnake(x, y);

          return;
        }
      }
    }
  }

  const mod = (n) => (n + 4) % 4;

  for (let i in gameBoard) {
    for (let j in gameBoard[i]) {
      if (control.includes(gameBoard[i][j])) {
        dir = control.indexOf(gameBoard[i][j]);
        i = +i;
        j = +j;
        snake.push([i, j]);
        visited[i][j] = true;
        head = [i, j];

        break;
      }
    }
  }

  getSnake(...head);

  for (let command of commands) {
    if ("LR".includes(command)) {
      command === "L" ? (dir = mod(dir - 1)) : (dir = mod(dir + 1));

      continue;
    }

    const x = snake[0][0] + dx[dir],
      y = snake[0][1] + dy[dir];

    if (x < 0 || x >= row || y < 0 || y >= col || visited[x][y]) {
      snake.forEach((v) => (finalState[v[0]][v[1]] = "X"));

      return finalState;
    }

    const [tailX, tailY] = snake.pop();
    visited[tailX][tailY] = false;
    snake.unshift([x, y]);
  }

  snake.forEach((v) => (finalState[v[0]][v[1]] = "*"));
  finalState[snake[0][0]][snake[0][1]] = control[dir];

  return finalState;
}
