import React from 'react'
import Header from './Header'
import { render, getByTestId } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Header.test.js', () => {
  it('renders children prop into a h1 tag', () => {
    const { queryByText } = render(<Header children="I am a Header" />)
    expect(queryByText('I am a Header')).toBeTruthy()
    expect(queryByText('I am a Header').tagName).toBe('H1')
  })

  it('renders back arrow link', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header hasBackArrow />
      </MemoryRouter>
    )
    getByTestId('back-arrow')
  })

  it('renders extra elements', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header extraComponents={<div data-testid="extra-element" />} />
      </MemoryRouter>
    )
    getByTestId('extra-element')
  })
})
