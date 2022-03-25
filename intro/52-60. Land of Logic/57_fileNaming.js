// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.
// Return an array of names that will be given to the files.

function solution(names) {
  const newArr = [];

  for (let i = 0; i < names.length; i++) {
    let count = 0;
    let tmp = names[i];

    if (newArr.indexOf(names[i]) > -1) {
      while (newArr.indexOf(names[i]) > -1) {
        count++;
        names[i] = tmp + "(" + count + ")";
      }
    }

    newArr.push(names[i]);
  }

  return newArr;
}
