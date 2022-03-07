// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function solution(inputString) {
  let str = "";

  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.charCodeAt(i);
    if (charCode === 122) {
      charCode = 096;
    }
    str += String.fromCharCode(charCode + 1);
  }
  return str;
}
