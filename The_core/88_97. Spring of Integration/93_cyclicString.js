// You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

function solution(s) {
  const arr = s.split("");

  for (let i = 1; i < arr.length; i++) {
    const leftPart = arr.slice(0, i);
    const rightPart = arr.slice(i);

    if (isSub(leftPart, rightPart)) {
      return i;
    }
  }

  return arr.length;
}

function isSub(sub, candidate) {
  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] !== sub[i % sub.length]) {
      return false;
    }
  }
  
  return true;
}
