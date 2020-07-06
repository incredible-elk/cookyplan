import React from 'react'
import MealInput from './MealInput'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: MealInput,
  title: 'MealInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const mealInputData = {
  updatedAt: new Date(2020, 6, 6, 18, 45),
}

export const Empty = () => <MealInput value="" />
export const WithInput = () => <MealInput value="Burritos"></MealInput>
