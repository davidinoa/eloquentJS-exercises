const sum = array => array.reduce((num, total) => num + total, 0)

const range = (start, end, step = 1) => {
  const array = []

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i)
  } else {
    for (let i = start; i >= end; i += step) array.push(i)
  }

  return array
}

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
