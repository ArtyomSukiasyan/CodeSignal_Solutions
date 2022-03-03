// Given a string, find out if its characters can be rearranged to form a palindrome.

function solution(inputString) {
    
  const arr = [];
  for (let i = 0; i < inputString.length; i++) {
    if (arr.includes(inputString[i])) {
      const idx = arr.indexOf(inputString[i]);
      arr.splice(idx, 1);
    } else {
      arr.push(inputString[i]);
    }
  }

  return arr.length === 0 || arr.length === 1;
}
