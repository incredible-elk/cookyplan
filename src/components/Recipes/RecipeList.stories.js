import React from 'react'
import RecipeList from './RecipeList'

export default {
  component: RecipeList,
  title: 'RecipeList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const List = () => <RecipeList />
