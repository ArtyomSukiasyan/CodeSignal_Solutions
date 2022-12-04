// You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

function solution(length, width, height) {
  const boxes = [];
  for (let i = 0; i < height.length; i++) {
    const sides = [length[i], width[i], height[i]];
    sides.sort((a, b) => a - b);
    boxes.push(sides);
  }

  boxes.sort(fits);

  for (let i = 1; i < boxes.length; i++) {
    if (fits(boxes[i - 1], boxes[i]) === 0) {
      return false;
    }
  }
  return true;
}

function fits(a, b) {
  if (a[0] < b[0] && a[1] < b[1] && a[2] < b[2]) {
    return -1;
  }

  if (a[0] > b[0] && a[1] > b[1] && a[2] > b[2]) {
    return 1;
  }

  return 0;
}
