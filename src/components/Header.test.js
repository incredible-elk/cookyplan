import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

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
