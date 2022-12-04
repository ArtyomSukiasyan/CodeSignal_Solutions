// It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

function solution(levelNum, levelHeight) {
  const maxWidth = 5 + (levelHeight + levelNum - 2) * 2;
  const tree = [];
  const startRepeatsCount = (maxWidth - 1) / 2;
  const crown = [
    " ".repeat(startRepeatsCount) + "*",
    " ".repeat(startRepeatsCount) + "*",
    " ".repeat((maxWidth - 3) / 2) + "***",
  ];
  const levels = [];
  const foot = [];

  for (let i = 0; i < levelNum; i++) {
    for (let j = 0; j < levelHeight; j++) {
      levels.push(
        " ".repeat(levelHeight - 1 - j + (levelNum - i - 1)) +
          "*".repeat(5 + 2 * (j + i))
      );
    }

    foot.push(
      " ".repeat((maxWidth - 1) / 2 - Math.floor(levelHeight / 2)) +
        "*".repeat(levelHeight + (levelHeight % 2 === 0 ? 1 : 0))
    );
  }

  const res = crown.concat(levels, foot);

  return res;
}
