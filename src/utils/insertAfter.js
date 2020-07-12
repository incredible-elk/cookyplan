export default function insertAfter(array, index, elementToInsert) {
  if (index < 0 || index >= array.length) {
    throw new Error('Index out of bounds')
  }
  return [
    ...array.slice(0, index + 1),
    elementToInsert,
    ...array.slice(index + 1),
  ]
}
