import React from 'react'
import recipes from '../__mocks__/recipes.json'
import RecipeListItem from './RecipeListItem'

export default function RecipeList() {
  return (
    <ul>
      {recipes.map(({ id, title }) => (
        <RecipeListItem key={id} title={title} />
      ))}
    </ul>
  )
}
