const arrayToList = array => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

const listToArray = list => {
  const array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (value, list) => ({ value, rest: list });

const nth = (list, n) => {
  if (!list) {
    return null;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
};
