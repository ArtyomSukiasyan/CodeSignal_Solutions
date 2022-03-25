// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//Find the minimal length of the jump enough to avoid all the obstacles.

function solution(inputArray) {
  let max = Math.max(...inputArray);
  let firstStep = 2;
  let step = firstStep;
  while (max >= step) {
    if (inputArray.includes(step)) {
      firstStep++;
      step = firstStep;
      continue;
    }
    step += firstStep;
  }
  return firstStep;
}
