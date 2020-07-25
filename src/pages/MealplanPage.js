import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import MealplanList from '../components/Mealplan/MealplanList'
import { saveToLocal, loadFromLocal } from '../utils/localStorage'
import { NavigationButton } from '../components/Button'
import imagePathHat from '../images/inverted-hat.svg'

export default function MealplanPage() {
  const handleChange = useCallback(
    (mealplanList) => saveToLocal('mealplanList', mealplanList),
    []
  )

  return (
    <>
      <Header>Mealplan</Header>

      <StyledMain>
        <MealplanList
          mealplanList={
            loadFromLocal('mealplanList') || {
              title: '',
              items: [{ id: 'initial', item: '', done: false }],
            }
          }
          name="mealplanList"
          saveChanges={handleChange}
        />
      </StyledMain>

      <StyledFooter>
        <NavigationButton to="/recipes" as={NavLink}>
          Recipes
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
    background: url(${imagePathHat}) no-repeat center var(--summergreen);
    background-position: left 22px top 7px;
    text-decoration: none;
  }
`
