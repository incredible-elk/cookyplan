import React from 'react'
import MealplanList from './MealplanList'
import { action } from '@storybook/addon-actions'

export default {
  component: MealplanList,
  title: 'MealplanList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const emptyMealplanListData = {
  title: '',
  items: [{ id: 'initial', item: '', done: false }],
}

export const mealplanListData = {
  title: 'Tuesday',
  items: [
    { id: '1', item: 'Burritos', done: true },
    { id: '2', item: 'Schnitzel', done: false },
  ],
}

export const Empty = () => (
  <MealplanList
    mealplanList={{ ...emptyMealplanListData }}
    onChange={action('handle-change')}
  />
)
export const WithTwoItems = () => (
  <MealplanList
    mealplanList={{ ...mealplanListData }}
    onChange={action('handle-change')}
  />
)
