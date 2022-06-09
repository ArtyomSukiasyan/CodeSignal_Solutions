// A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.
// How many points with integer coordinates are located inside the given rectangle (including on its sides)?

function solution(a, b) {
  const ld = a / Math.sqrt(2) / 2;
  const sd = b / Math.sqrt(2) / 2;
  const doubleFlooredId = 2 * Math.floor(ld);
  const doubleFlooredSd = 2 * Math.floor(sd);
  const rectExt = [doubleFlooredId + 1, doubleFlooredSd + 1];
  const rectInt = [
    doubleFlooredId + (ld % 1 < 0.5 ? 0 : 2),
    doubleFlooredSd + (sd % 1 < 0.5 ? 0 : 2),
  ];

  return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1];
}
