// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
  let str = "*".repeat(picture[0].length + 2);

  const res = [str];

  for (let i = 0; i < picture.length; i++) {
    res.push(`*${picture[i]}*`);
  }

  res.push(str);

  return res;
}
