function solution(maxLength, text) {
  const words = text.match(/[a-zA-Z]+/g) || [];

  return words.filter((el) => el.length <= maxLength).length;
}
