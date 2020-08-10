import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function RecipeListItem({ id, title }) {
  return (
    <StyledRecipeListItem>
      <StyledLink to={`/recipes/${id}`}>{title}</StyledLink>
    </StyledRecipeListItem>
  )
}

const StyledRecipeListItem = styled.li`
  display: flex;
  margin: 0 30px;
  padding: 15px 0;
  list-style: none;
  font-family: var(--user);
  border-bottom: 1px solid var(--divider);
  color: var(--nandor);
  text-decoration: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: var(--user);
  color: inherit;
`
