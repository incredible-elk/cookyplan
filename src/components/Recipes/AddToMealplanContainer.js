import React, { useState } from 'react'
import { AddRecipeTitleToMealplanToggle } from '../Button'
import imagePathPlus from '../../images/inverted-plus.svg'
import { v4 as uuidv4 } from 'uuid'

import styled from 'styled-components'
import { saveToLocal, loadFromLocal } from '../../utils/localStorage'

export default function AddToMealplanContainer({ title }) {
  const [active, setActive] = useState(() => {
    const mealplanList = loadFromLocal('mealplanList') || {
      title: '',
      items: [{ id: 'initial', item: '', done: false }],
    }

    const initialState =
      mealplanList.items.find((meal) => {
        return meal.item === title
      }) !== undefined
    return initialState
  })

  const addRecipeToMealplan = (title) => {
    const newMeal = { id: uuidv4(), item: title, done: false }
    const mealplanList = loadFromLocal('mealplanList') || {
      title: '',
      items: [{ id: 'initial', item: '', done: false }],
    }
    const newMealplanList = {
      ...mealplanList,
      items:
        mealplanList.items.length === 0 ||
        (mealplanList.items.length === 1 && mealplanList.items[0].item === '')
          ? [newMeal]
          : [...mealplanList.items, newMeal],
    }
    saveToLocal('mealplanList', newMealplanList)
  }

  const deleteRecipeFromMealplan = (title) => {
    const mealplanList = loadFromLocal('mealplanList') || {
      title: '',
      items: [{ id: 'initial', item: '', done: false }],
    }
    const newMealplanList = {
      ...mealplanList,
      items: mealplanList.items.filter((meal) => meal.item !== title),
    }
    saveToLocal('mealplanList', newMealplanList)
  }

  return (
    <Container>
      <AddRecipeTitleToMealplanToggle
        data-testid="add-to-mealplan"
        onClick={() => {
          setActive(!active)
          if (active) {
            deleteRecipeFromMealplan(title)
          } else {
            addRecipeToMealplan(title)
          }
        }}
      >
        {active ? 'Remove from Mealplan' : 'Add to Mealplan'}
        <StyledImage active={active} src={imagePathPlus} />
      </AddRecipeTitleToMealplanToggle>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 10px;

  ${AddRecipeTitleToMealplanToggle} {
    margin-bottom: 10px;
  }
`

export const StyledImage = styled.img`
  vertical-align: middle;
  margin-left: 7px;
  transform: ${(props) => (props.active ? 'rotate(45deg)' : 'rotate(0)')};
  transform-origin: 50% 50%;
  transition: transform 0.3s;
`
