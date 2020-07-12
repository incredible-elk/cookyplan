import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'

describe('Header.test.js', () => {
  it('exists an text content Mealplan', () => {
    const { queryByText } = render(<Header />)
    expect(queryByText('Mealplan')).toBeTruthy()
  })

  it('headline is wrapped by h1 html tag', () => {
    const { queryByText } = render(<Header />)
    expect(queryByText('Mealplan').tagName).toBe('H1')
  })
})
