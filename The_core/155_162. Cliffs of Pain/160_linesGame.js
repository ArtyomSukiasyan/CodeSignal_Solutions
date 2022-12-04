// Let's remember the '90s and play an old-school Lines game with the following rules.
// The game starts with a 9 × 9 field with several colored balls placed on its cells (there are 7 possible colors but not all colors have to be present initially). The player can move one ball per turn, and they may only move a ball if there is a clear path between the current position of the chosen ball and the desired destination. Clear paths are formed by neighboring empty cells. Two cells are neighboring if they have a common side. The goal is to remove balls by forming lines (horizontal, vertical or diagonal) of at least five balls of the same color. If the player manages to form one or more such lines, the move is called successful, and the balls in those lines disappear. Otherwise, the move is called unsuccessful, and three more balls appear on the field.
// You are given the game logs, and your task is to calculate the player's final score. Here's the information you have:
// The field state at the initial moment;
// The clicks the user has made. Note that a click does not necessarily result in a move:
// If the user clicks a ball and then another, the first click is ignored;
// If two consecutive clicks result in an incorrect move, they are ignored;
// After each unsuccessful move three more balls appear:
// newBalls contains the balls' colors;
// newBallsCoordinates contains their coordinates;
// Note that after the balls appear, new lines may form;
// Whenever new lines appear, they are removed and the player receives A + B - 1 points, where:
// A is the number of lines of at least five balls;
// B is the total number of balls in those lines;
// Possible ball colors are red, blue, orange, violet, green, yellow and cyan, which are represented in logs by
// "R", "B", "O", "V", "G", "Y" and "C" respectively.

function solution(field, clicks, newBalls, newBallsCoordinates) {
  let score = 0;
  let lines = [];
  const checkCell = (x, y) => {
    for (const [dx, dy] of [
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
    ]) {
      let x1 = x;
      let y1 = y;
      while ((field[y1] || [])[x1] === field[y][x]) {
        x1 += dx;
        y1 += dy;
      }
      let x2 = x;
      let y2 = y;
      while ((field[y2] || [])[x2] === field[y][x]) {
        x2 -= dx;
        y2 -= dy;
      }
      const size = Math.max(x1 - x2 - 1, y1 - y2 - 1);
      if (size >= 5) {
        lines.push([size, x2, y2, dx, dy]);
      }
    }
    return lines.length > 0;
  };
  const countLines = () => {
    for (const line of lines) {
      if (lines[line]) continue;
      lines[line] = true;
      const [size, x, y, dx, dy] = line;
      score += size + 1;
      for (let i = 0, j = x, k = y; i < size; i++) {
        j += dx;
        k += dy;
        field[k][j] = ".";
      }
    }
    score -= lines.length > 0;
  };

  let spawnIdx = 0;

  let selected = null;
  for (const [cy, cx] of clicks) {
    lines = [];
    let isUnsuccessful = false;
    if (selected && field[cy][cx] === ".") {
      const visited = {};
      const canReachFinishFrom = (pos) => {
        const [x, y] = pos;
        if (((field[y] || [])[x] !== "." && pos !== selected) || visited[pos])
          return false;
        visited[pos] = true;
        if (x === cx && y === cy) return true;
        return [
          [x, y + 1],
          [x, y - 1],
          [x + 1, y],
          [x - 1, y],
        ].some(canReachFinishFrom);
      };
      if (canReachFinishFrom(selected)) {
        const [sx, sy] = selected;
        field[cy][cx] = field[sy][sx];
        field[sy][sx] = ".";
        if (!checkCell(cx, cy)) {
          isUnsuccessful = true;
        }
        countLines();
      }
      selected = null;
    } else if (field[cy][cx] !== ".") {
      selected = [cx, cy];
    } else {
      selected = null;
    }

    if (isUnsuccessful && spawnIdx < newBalls.length) {
      lines = [];
      for (let i = 0; i < 3; i++) {
        const color = newBalls[spawnIdx];
        const [sy, sx] = newBallsCoordinates[spawnIdx++];
        if (field[sy][sx] === ".") {
          field[sy][sx] = color;
        }
      }
      for (let i = 0; i < 3; i++) {
        const [sy, sx] = newBallsCoordinates[spawnIdx - i - 1];
        checkCell(sx, sy);
      }
      countLines();
    }
  }

  return score;
}
