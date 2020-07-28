import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import imagePathClipboard from '../images/inverted-clipboard.svg'
import { NavigationButton } from '../components/Button'
import RecipeList from '../components/Recipes/RecipeList'

export default function RecipePage() {
  return (
    <>
      <Header>Recipes</Header>
      <StyledMain>
        <RecipeList />
      </StyledMain>
      <StyledFooter>
        <NavigationButton name="navbutton" to="/" as={NavLink}>
          Mealplan
        </NavigationButton>
      </StyledFooter>
    </>
  )
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 100px;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${NavigationButton} {
    position: fixed;
    background: url(${imagePathClipboard}) no-repeat center var(--summergreen);
    background-position: left 27px top 7px;
    text-decoration: none;
  }
`
