const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if (
    a === null ||
    typeof a !== 'object' ||
    b === null ||
    typeof b !== 'object'
  ) {
    return false;
  }

  let propsA = 0;
  let propsB = 0;

  for (let prop in a) {
    propsA++;
  }

  for (let prop in b) {
    propsB++;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return propsA === propsB;
};
