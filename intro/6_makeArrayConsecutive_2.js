// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {
  let min = statues[0];
  let max = statues[0];
  for (let i = 1; i < statues.length; i++) {
    if (statues[i] < min) {
      min = statues[i];
    }
    if (statues[i] > max) {
      max = statues[i];
    }
  }
  return max - min - statues.length + 1;
}
