// John has always liked analog clocks more than digital ones. He's been dreaming about turning his digital clock into an analog one for as long as he can remember, and now he met you, a great programmer, so his dream is about to come true.
// The screen of his digital clock is a simple 17 × 17 rectangle of pixels. It always shows four digits: the first two stand for hours and second two for minutes (John's clock uses the 24-hour format). Each digit is located in a 17 × 4 rectangle, with the leftmost column always empty, and the other three columns filled according to this pattern with the proper scaling:
// After the first two digits there is a separating column containing one symbol ':' at its center.
// Now John asks you to make his clock show time in the format similar to analog clocks. Here's how: an analog clock can be represented as a circle (the clock's borders) and two segments (the clock's hands). To show it on the 17 × 17 screen, you should light the pixels on it so that the pixel with coordinates (x, y) is enabled if and only if the minimal distance to the circle or one of the segments is less than sqrt(0.5).
// John wants you to implement the function that changes the digital representation to the analog one as described above. Given a 17 × 17 rectangle dtime representing digital time representation, return the analog representation of the same time.
// Please note that for the early prototype you have to develop, both of the clock's hands should have the same length.

function solution(t) {
  const nums =
    "*.***,**...,**.**,**.*.,.***.,***..,***.*,*..*.,*****,****.".split(",");
  const sqrt = Math.sqrt(0.5);
  const cntr = 8;
  const freq = 40;
  const step = cntr / freq;
  const ck = [
    [4],
    [3, 2],
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4],
  ].map((x) =>
    [...x, 17 - 2 * x.reduce((a, b) => a + b, 0), ...x.reverse()]
      .map((y, i) => nums[4][i % 2].repeat(y))
      .join("")
      .split("")
  );

  const n = [1, 5, 10, 14].map((x) =>
    nums.indexOf(
      t[0][1 + x] + t[8][1 + x] + t[1][0 + x] + t[1][2 + x] + t[9][0 + x]
    )
  );

  const h = (n[0] * 10 + n[1]) % 12;
  const m = n[2] * 10 + n[3];
  const ha = (h + m / 60) * 30;
  const ma = m * 6;
  const checkPoint = (x1, y1, x2, y2) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) < sqrt
      ? (ck[x1][y1] = "*")
      : 0;
  const drawPoint = (x, y) =>
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ].map((k) =>
        checkPoint(k[0] + Math.round(x), k[1] + Math.round(y), x, y)
      ),
    drawHand = (r) =>
      [...".".repeat(freq)].map((k, i) =>
        drawPoint(cntr + Math.sin(r) * step * i, cntr + Math.cos(r) * step * i)
      );
  [ha, ma].map((x) => drawHand(((x + 270) * Math.PI) / 180));
  return ck;
}
