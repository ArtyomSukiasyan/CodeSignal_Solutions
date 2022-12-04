// Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.

function solution(matrix, width, center, t) {
  for (let i = 0; i < t % 8; i++) {
    let startX = center[0] - (width - 1) / 2;
    let startY = center[1] - (width - 1) / 2;
    let midX = center[0];
    let midY = center[1];
    let endX = center[0] + (width - 1) / 2;
    let endY = center[1] + (width - 1) / 2;

    for (let k = 0; k < (width - 1) / 2; k++) {
      let tem = matrix[startX][startY];

      matrix[startX][startY] = matrix[midX][startY];
      matrix[midX][startY] = matrix[endX][startY];
      matrix[endX][startY] = matrix[endX][midY];
      matrix[endX][midY] = matrix[endX][endY];
      matrix[endX][endY] = matrix[midX][endY];
      matrix[midX][endY] = matrix[startX][endY];
      matrix[startX][endY] = matrix[startX][midY];
      matrix[startX][midY] = tem;
      startX++;
      startY++;
      endX--;
      endY--;
    }
  };
  
  return matrix;
}
