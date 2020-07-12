import insertAfter from './insertAfter'

describe('insertAfter', () => {
  it('inserts an element after a specific index', () => {
    const array = ['apple', 'pen', 'bread']
    const newArray = insertAfter(array, 1, 'pineapple')
    expect(newArray).toEqual(['apple', 'pen', 'pineapple', 'bread'])
  })
  it('inserts an element after the last element', () => {
    const array = ['apple', 'pen', 'bread']
    const newArray = insertAfter(array, 2, 'pineapple')
    expect(newArray).toEqual(['apple', 'pen', 'bread', 'pineapple'])
  })
  it('inserts an element after the first element', () => {
    const array = ['apple', 'pen', 'bread']
    const newArray = insertAfter(array, 0, 'pineapple')
    expect(newArray).toEqual(['apple', 'pineapple', 'pen', 'bread'])
  })
  it('throws an error if index of element is < 0', () => {
    const array = ['apple', 'pen', 'bread']
    expect(() => {
      insertAfter(array, -1, 'pineapple')
    }).toThrowError('Index out of bounds')
  })
  it('throws an error if index of element is > than the index of the last element', () => {
    const array = ['apple', 'pen', 'bread']
    expect(() => {
      insertAfter(array, 3, 'pineapple')
    }).toThrowError('Index out of bounds')
  })
})
