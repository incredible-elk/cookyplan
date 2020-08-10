import React from 'react'
import styled from 'styled-components'

export default function RecipeDetail({ ingredients, method, title }) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledHeader>Ingredients:</StyledHeader>
      <StyledDetails>
        {ingredients.map((ingredient) => (
          <>
            {ingredient}
            <br />
          </>
        ))}
      </StyledDetails>
      <StyledHeader>Method:</StyledHeader>
      <StyledDetails>
        {method.split('\n').map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </StyledDetails>
    </>
  )
}

const StyledTitle = styled.h2`
  margin: 0 20px 0 25px;
  font-size: 2rem;
  font-family: var(--user);
  color: var(--input);
`

const StyledHeader = styled.h3`
  margin: 30px 0 5px 25px;
  font-size: 1.3rem;
  color: var(--summergreen);
`

const StyledDetails = styled.div`
  margin: 0 auto;
  width: 80%;
  height: auto;
  font-family: var(--user);
  color: var(--input);
`
