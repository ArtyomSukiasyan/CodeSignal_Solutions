// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.

function solution(n) {
  return parseInt(
    ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))
      .split("")
      .reduce((acc, val, idx, arr) => {
        if (idx % 2 === 0) {
          acc.push(arr.slice(idx, idx + 2));
        }
        return acc;
      }, [])
      .map((el) => el.reverse())
      .reduce((acc, el) => [...acc, ...el], [])
      .join(""),
    2
  );
}
