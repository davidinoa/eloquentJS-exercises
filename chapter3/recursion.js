function isEven(num) {
  if (num < 0) {
    return null;
  } else if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(-1));
