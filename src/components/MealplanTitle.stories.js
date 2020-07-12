import React from 'react'
import MealplanTitle from './MealplanTitle'

export default {
  component: MealplanTitle,
  title: 'MealplanTitle',
}

export const Empty = () => <MealplanTitle value="" />
export const WithInput = () => <MealplanTitle value="Tuesday"></MealplanTitle>
