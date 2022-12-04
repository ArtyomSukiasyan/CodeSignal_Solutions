// You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.

function solution(rows) {
  let result = [];
  let minStep = rows.length;

  for (let i = 0; i < rows[0].length; i++) {
    let finish = rows.length - 1;
    let step = 0;

    for (let j = rows.length - 1; j >= 0; j--) {
      if (rows[j].charAt(i) === "#") {
        step = finish - j;
        finish--;
      }
    }

    if (step === minStep) {
      result.push(i);
    }

    if (step < minStep) {
      minStep = step;
      result = [i];
    }
  }

  return result;
}
