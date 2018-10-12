function countB(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      count++;
    }
  }
  return count;
}

console.log(countB('BBernardo')); // 2
