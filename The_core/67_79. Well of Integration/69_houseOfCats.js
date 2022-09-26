// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

function solution(legs) {
  const res = [];
  const partLegs = legs / 2;
  const startN = legs % 4 === 0 ? 0 : 1;

  calcLegs(startN);

  function calcLegs(n) {
    for (let i = n; i <= partLegs; i += 2) {
      res.push(i);
    }
  }

  return res;
}
