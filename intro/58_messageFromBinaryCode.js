// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.
// Assuming that your hunch is correct, decode the message.

function solution(code) {
  let res = "";

  for (let i = 0; i < code.length; i += 8) {
    const str = code.slice(i, i + 8);
    const num = parseInt(str, 2);
    const letter = String.fromCharCode(num);
    res += letter;
  }

  return res;
}
