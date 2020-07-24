import React from 'react'
import MealInput from './MealInput'

export default {
  component: MealInput,
  title: 'MealInput',
}

export const Empty = () => <MealInput value="" />
export const WithInput = () => <MealInput value="Burritos"></MealInput>
