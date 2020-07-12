import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders mealplan link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Mealplan/i)
  expect(linkElement).toBeInTheDocument()
})
