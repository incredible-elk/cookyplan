import React from 'react'
import { AddButton } from './Button'

import { render, fireEvent } from '@testing-library/react'

it('triggers an event on click', async () => {
  const onSpy = jest.fn()

  const { getByTestId } = render(
    <AddButton data-testid="add-button" name="addbutton" onClick={onSpy}>
      Add item
    </AddButton>
  )

  const button = getByTestId('add-button')

  fireEvent.click(button)

  expect(onSpy).toHaveBeenCalledTimes(1)
})
