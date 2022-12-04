// Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:
// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

function solution(shoes) {
  let pos;
  let shoe;

  while (shoes.length) {
    shoe = shoes.pop();
    pos = shoes.findIndex(
      ([type, size]) => size === shoe[1] && type === 1 - shoe[0]
    );

    if (pos >= 0) {
      shoes.splice(pos, 1);
    } else {
      return false;
    }
  }

  return true;
}
