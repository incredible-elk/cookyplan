import React from 'react'
import Button, {
  AddButton,
  DeleteButton,
  NavigationButton,
  AddOrRemoveFromMealplan,
} from './Button'
import imagePathPlus from '../images/inverted-plus.svg'
import { action } from '@storybook/addon-actions'
import { StyledImage } from './Recipes/AddToMealplanToggle'

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

export const NavigateToButton = () => (
  <NavigationButton>Navigate</NavigationButton>
)

export const AddRecipeToMealplanToggle = () => (
  <AddOrRemoveFromMealplan>
    Add to Mealplan
    <StyledImage onClick={action('Add to Mealplan')} src={imagePathPlus} />
  </AddOrRemoveFromMealplan>
)
