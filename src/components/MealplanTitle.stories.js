import React from 'react'
import MealplanTitle from './MealplanTitle'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: MealplanTitle,
  title: 'MealplanTitle',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const mealplanTitleData = {
  updatedAt: new Date(2020, 6, 6, 13, 10),
}

export const Empty = () => <MealplanTitle value="" />
export const WithInput = () => <MealplanTitle value="Tuesday"></MealplanTitle>
