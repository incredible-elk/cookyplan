import React from 'react'
import styled from 'styled-components'
import recipes from '../__mocks__/recipes.json'
import RecipeListItem from './RecipeListItem'

export default function RecipeList() {
  return (
    <StyledRecipeList id="recipes">
      {recipes.map(({ id, title }) => (
        <RecipeListItem id={id} key={id} title={title} />
      ))}
    </StyledRecipeList>
  )
}

const StyledRecipeList = styled.ul`
  margin-top: 10px;
`
