import { saveToLocal, loadFromLocal } from './localStorage'

beforeEach(() => {
  return localStorage.clear()
})

describe('saveToLocal', () => {
  it('saves the current state to local storage', () => {
    saveToLocal('fruit', ['apple', 'peach', 'pineapple'])
    expect(localStorage.fruit).toEqual('["apple","peach","pineapple"]')
  })
  it('overwrites previous values in the local storage', () => {
    saveToLocal('fruit', ['apple', 'banana', 'pineapple'])
    expect(localStorage.fruit).toEqual('["apple","banana","pineapple"]')
  })
})

describe('loadFromLocal', () => {
  it('loads data from local storage', () => {
    localStorage.fruit = '["apple","peach","pineapple"]'
    const fruit = loadFromLocal('fruit')
    expect(fruit).toEqual(['apple', 'peach', 'pineapple'])
  })
  it('returns a falsy value when there is no existing value to the key', () => {
    const fruit = loadFromLocal('fruit')
    expect(fruit).toBeFalsy()
  })
})
