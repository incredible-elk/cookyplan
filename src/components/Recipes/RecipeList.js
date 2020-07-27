import React from 'react'
import recipes from '../__mocks__/recipes.json'
import RecipeListItem from './RecipeListItem'
import styled from 'styled-components'

export default function RecipeList() {
  return (
    <StyledRecipeList>
      {recipes.map(({ id, title }) => (
        <RecipeListItem key={id} title={title} />
      ))}
    </StyledRecipeList>
  )
}

const StyledRecipeList = styled.ul`
  margin: 20px 0 0 10px;
`
