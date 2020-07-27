import React from 'react'
import styled from 'styled-components'

export default function RecipeListItem({ title }) {
  return <StyledRecipeListItem>{title}</StyledRecipeListItem>
}

const StyledRecipeListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 30px;
  list-style: none;
  font-family: var(--user);
  color: var(--nandor);
`
