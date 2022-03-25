// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

function solution(st) {
  let i = 0;
  let aux;

  while (st !== st.split("").reverse().join("")) {
    aux = st.split("");
    aux.splice(st.length - i, 0, st[i]);
    st = aux.join("");
    i++;
  }

  return st;
}
