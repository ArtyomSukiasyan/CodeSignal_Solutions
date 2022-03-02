// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

function solution(inputString) {
  let x = inputString;
  while (x.includes("(")) {
    const endBracket = x.indexOf(")");
    const startBracket = x.lastIndexOf("(", endBracket);
    const reversedString = x
      .slice(startBracket + 1, endBracket)
      .split("")
      .reverse()
      .join("");
    x = x.slice(0, startBracket) + reversedString + x.slice(endBracket + 1);
  }
  return x;
}
