// You've mastered the Rubik's Cube and got bored solving it, so now you are looking for a new challenge. One puzzle similar to the Rubik's Cube caught your attention. It's called a Pyraminx puzzle, and is a triangular pyramid-shaped puzzle. The parts are arranged in a pyramidal pattern on each side, while the layers can be rotated with respect to each vertex, and the individual tips can be rotated as well. There are 4 faces on the Pyraminx. The puzzle should be held so that one face faces you and one face faces down, as in the image below. The four corners are then labeled U (for up), R (for right), L (for left), and B (for back). The front face thus contains the U, R, and L corners.
// Let's write down all possible moves for vertex U in the following notation:
// U - 120° counterclockwise turn of topmost tip (assuming that we're looking at the pyraminx from the top, and vertex U is the topmost);
// U' - clockwise turn for the same tip;
// u - 120° counterclockwise turn of two upper layer;
// u' - clockwise turn for the same layers.
// For other vertices the moves can be described similarly:
// The first puzzle you bought wasn't assembled, so you get your professional pyraminx solver friend to assemble it. He does, and you wrote down all his moves notated as described above. Now the puzzle's faces have colors faceColors[0] (front face), faceColors[1] (bottom face), faceColors[2] (left face), faceColors[3] (right face). You want to know the initial state of the puzzle to repeat your friend's moves and see how he solved it.

function solution(faceColors, moves) {
  const p = faceColors.map((x) => new Array(9).fill(x));
  const f = { u: [0, 2, 3], b: [1, 3, 2], l: [2, 0, 1], r: [3, 1, 0] };
  const swap = (i, j, a, b) =>
    ([p[a[0]][j], p[a[b]][i]] = [p[a[b]][i], p[a[0]][j]]);
  const move = (m) => {
    const c = m[0].toLowerCase();
    [4, 8].map((x, i) => swap(x, 0, f[c], i + 1));

    if (c === m[0]) {
      [6, 3, 5, 7, 1, 6].map((x, i) =>
        swap(x, (i % 2 ? i + 1 : i + 2) / 2, f[c], (i % 2) + 1)
      );
    }

    if (m.length > 1) {
      move(m[0]);
    }
  };

  moves.reverse().map((x) => move(x));

  return p;
}
