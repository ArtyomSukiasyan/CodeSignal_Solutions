// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

function solution(grid) {
  return (
    validateRows(grid) &&
    validateRows(rotateGrid(grid)) &&
    validateSubGrids(grid)
  );
}

function validateRows(grid) {
  let valid = true;

  for (const row of grid) {
    if (!valid) {
      break;
    }

    const dict = {};

    row
      .filter((item) => item !== ".")
      .forEach((item) => {
        if (dict[item]) {
          valid = false;
        } else {
          dict[item] = 1;
        }
      });
  }

  return valid;
}

function rotateGrid(grid) {
  return grid.map((inArr, i) => {
    let newArr = [];

    for (const arr of grid) {
      newArr = [arr[i], ...newArr];
    }

    return newArr;
  });
}

function validateSubGrids(grid) {
  const subGrids = [];

  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid.length; j += 3) {
      subGrids.push(getSubGridRow(grid, i, j));
    }
  }

  return validateRows(subGrids);
}

function getSubGridRow(grid, curRow, curCol) {
  const currentSubGrid = [];

  for (let row = curRow; row < curRow + 3; row++) {
    for (let col = curCol; col < curCol + 3; col++) {
      currentSubGrid.push(grid[row][col]);
    }
  }

  return currentSubGrid;
}
