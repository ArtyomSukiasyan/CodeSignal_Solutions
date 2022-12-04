// In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.
// Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

function solution(bishop1, bishop2) {
  const pos1 = getPos(bishop1);
  const pos2 = getPos(bishop2);
  const sameDiagonal =
    Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1]);

  if (!sameDiagonal) {
    return [bishop2, bishop1].sort((a, b) => (a < b ? -1 : 1));
  }

  const a = newPos(pos1, pos2);
  const b = newPos(pos2, pos1);

  return [a, b].sort((a, b) => (a < b ? -1 : 1));
}

const getPos = (str) => ["abcdefgh".indexOf(str.charAt(0)), +str.charAt(1) - 1];

const newPos = (pos1, pos2) => {
  let hor;
  let vert;
  if (pos1[0] < pos2[0]) {
    hor = -pos1[0];
  } else if (pos1[0] > pos2[0]) {
    hor = 7 - pos1[0];
  }
  if (pos1[1] < pos2[1]) {
    vert = -pos1[1];
  } else if (pos1[1] > pos2[1]) {
    vert = 7 - pos1[1];
  }

  const min = Math.min(Math.abs(hor), Math.abs(vert));

  if (hor <= 0) {
    hor = -min;
  }

  if (hor > 0) {
    hor = min;
  }

  if (vert <= 0) {
    vert = -min;
  }
  
  if (vert > 0) {
    vert = min;
  }

  return "abcdefgh".charAt(pos1[0] + hor) + (pos1[1] + vert + 1);
};
