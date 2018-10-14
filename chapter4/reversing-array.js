function reverseArray (array) {
  const reversed = []
  for (let i = array.length - 1; i >= 0; i--) reversed.push(array[i])
  return reversed
}

function reverseArrayInPlace (array) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex < rightIndex) {
    const temp = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temp

    leftIndex++
    rightIndex--
  }

  return array
}

console.log(reverseArray(['A', 'B', 'C']))

const arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
