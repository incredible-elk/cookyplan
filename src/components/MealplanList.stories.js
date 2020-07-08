import React from 'react'
import MealplanList from './MealplanList'

export default {
  component: MealplanList,
  title: 'MealplanList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const mealplanListData = {
  id: '1',
  title: 'Tuesday',
  items: [
    { id: '1', item: 'Burritos', done: true },
    { id: '2', item: 'Schnitzel', done: false },
  ],
}

export const WithTwoItems = () => (
  <MealplanList mealplanList={{ ...mealplanListData }} />
)
