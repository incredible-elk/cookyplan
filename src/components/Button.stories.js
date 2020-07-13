import React from 'react'
import Button, { AddButton, DeleteButton } from './Button'
import { action } from '@storybook/addon-actions'

export default {
  component: Button,
  title: 'Button',
}

export const DefaultButton = () => (
  <Button onClick={action('button-clicked')}>I'm a pretty Button</Button>
)

export const AddItemButton = () => (
  <AddButton onClick={action('add-item')}>Add item</AddButton>
)

export const DeleteItemButton = () => (
  <>
    <input />
    <DeleteButton onClick={action('delete-item')} />
  </>
)
