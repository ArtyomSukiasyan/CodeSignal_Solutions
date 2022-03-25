// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
  let len = picture[0].length + 2;
  let stars = "";

  for (let i = 0; i < len; i++) {
    stars += "*";
  }

  const result = [stars, ...picture, stars];

  for (let i = 1; i < result.length - 1; i++) {
    result[i] = "*" + result[i] + "*";
  }

  return result;
}
